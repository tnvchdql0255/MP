import { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import TextInputMethod from "./TextInput";
export default function Prompt({ navigation, route }) {
  var [currentIndex, setCurrentIndex] = useState(0);
  const [prompt, setPrompt] = useState(
    route.params.value.PromptData[currentIndex].stringValue
  );

  const [input, setInput] = useState("");
  var answer = route.params.value.PromptAnswer;
  console.log(route);

  function isCorrect() {
    if (answer[currentIndex].stringValue == input) {
      alert("true");
      changeNextPrompt();
    } else {
      alert("false");
    }
  }
  function passPrompt() {
    changeNextPrompt();
  }
  function changeNextPrompt() {
    if (!isLastIndex()) {
      setCurrentIndex(currentIndex + 1);
      alert("goto next");
    } else {
      alert("this is last prompt");
    }
  }
  function isLastIndex() {
    if (currentIndex == answer.length - 1) {
      console.log("this is last Prompt");
      return true; //마지막 인덱스면?
    } else {
      return false; //마지막 인덱스가 아니면?
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
