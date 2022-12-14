import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import TextInputMethod from "./TextInput";
import {
  Doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { dbio, db } from "./firebaseConfig";
import useStore from "./globalData";

export default function Prompt({ navigation, route }) {
  console.log(route.params.confirmation);
  var [currentIndex, setCurrentIndex] = useState(0); //prompt index
  var [chance, setChance] = useState(2);
  const currentStatus = useStore((state) => state.data);
  const addData = useStore((state) => state.addData);
  var id = route.params.id;
  const [prompt, setPrompt] = useState(
    route.params.value.PromptData[currentIndex].stringValue
  );
  const [input, setInput] = useState("");
  var answer = route.params.value.PromptAnswer;

  function addPoint() {
    addData();
    var point = currentStatus;
    setDoc(doc(db, "UserStatus", id), {
      QuestionStatus: point,
      uID: id,
    })
      .then(() => {
        alert("point added");
        console.log(currentStatus);
      })
      .catch((error) => {
        alert("failed to upload:" + { error });
      });
  }

  function isCorrect() {
    if (answer[currentIndex].stringValue == input) {
      alert("true");
      addPoint();
      changeNextPrompt();
    } else {
      setChance(chance - 1);
      alert("wrong, currentChance: " + JSON.stringify(chance));
      isChanceEmpty();
    }
  }
  function passPrompt() {
    changeNextPrompt();
  }
  function changeNextPrompt() {
    if (!isLastIndex()) {
      setCurrentIndex(currentIndex + 1);
      setChance(2); //찬스를 다시 2로 초기화
      alert("goto next");
    } else {
      alert(route.params.confirmation);
      navigation.goBack(); //back to QuizScreen
    }
  }
  function isLastIndex() {
    if (currentIndex == answer.length - 1) {
      return true; //마지막 인덱스면?
    } else {
      return false; //마지막 인덱스가 아니면?
    }
  }
  function isChanceEmpty() {
    if (chance == 0) {
      alert("all chance used up");
      passPrompt();
    }
  }
  useEffect(() => {
    setPrompt(route.params.value.PromptData[currentIndex].stringValue);
  }, [currentIndex]);
  return (
    <View>
      <Text>{prompt}</Text>
      <TextInputMethod
        inputData={input}
        secureTextEntry={false}
        onChangeText={(e) => {
          setInput(e);
        }}
        placeholder={""}
      ></TextInputMethod>
      <Button
        title="confirm"
        onPress={() => {
          isCorrect();
        }}
      ></Button>
      <Button
        title="pass"
        onPress={() => {
          passPrompt();
        }}
      ></Button>
    </View>
  );
}
