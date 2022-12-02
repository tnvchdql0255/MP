import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.question}>{prompt}</Text>
      <TextInputMethod
        inputData={input}
        secureTextEntry={false}
        onChangeText={(e) => {
          setInput(e);
        }}
        placeholder={""}
      ></TextInputMethod>

      <View style={styles.ButtonLayout}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            isCorrect();
          }}
        >
          <Text style={styles.text}>confirm</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            passPrompt();
          }}
        >
          <Text style={styles.text}>   pass   </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DAEA",
    alignItems: "center", // flexDirection과 수직
    paddingBottom: 50,
  },

  question: {
    color:"#000000",
    marginTop: 70,
    maxWidth: "100%",
    fontSize: 22,
    margin: 25,
    paddingBottom: 30,
  },

  ButtonLayout: {
    flex: 1,
    maxWidth: "55%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    marginLeft: "38%",
  },

  button: {
    backgroundColor: "#FFFFFF",
    maxWidth: "100%",
    maxHeight: "12%",
    padding: 10,
    margin: 12,
    borderRadius: 12,
  },

  text: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center",
    textAlign: "center"
  }
});
