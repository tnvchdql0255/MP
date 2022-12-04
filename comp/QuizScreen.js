import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import ModalContent from "./ModalContent";
import { globalStyle } from "./style/GlobalStyle";

const QuizScreen = ({ navigation, route }) => {
  var questionData = route.params.questionData;
  var id = route.params.id; //user Id (ex:abc@test.com)
  const index = route.params.index; //get question index (0~7)
  questionData = questionData[index].doc.data.value.mapValue.fields; //get Q data by q index
  console.log(questionData);
  var openEndedQ = questionData.open_ended_question.stringValue;
  var mainQuestion = questionData.Main_question.stringValue;
  var Strategy_A = questionData.Strategy_A.stringValue;
  var Strategy_B = questionData.Strategy_B.stringValue;
  var Strategy_C = questionData.Strategy_C.stringValue;

  const [disable_A, setDisable_A] = useState(false);
  const [disable_B, setDisable_B] = useState(true);
  const [disable_C, setDisable_C] = useState(true);
  const [modalVisable, setModalVisable] = useState(true);
  //Strategy 버튼 클릭 가능여부 제어 변수

  function modalOff() {
    setModalVisable(false);
  }
  return (
    <View style={globalStyle.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisable}
        onRequestClose={() => setModalVisable(false)}
      >
        <ModalContent modalOff={modalOff} oeq={openEndedQ}></ModalContent>
      </Modal>
      <ScrollView>
        <Text style={globalStyle.question}>{mainQuestion}</Text>
        <TouchableOpacity
          disabled={disable_A}
          style={{
            backgroundColor: disable_A ? "#B3B6C4" : "#FFFFFF",
            ...styles.userButton,
          }}
          onPress={() => {
            let value = getPromptData_A();
            let conf = getConfirmation("A");
            navigation.navigate("Prompt", {
              value,
              id: id,
              Qindex: index,
              confirmation: conf,
            }); // 풀이 1 선택하면 풀이과정 입력하는 새로운 component로 이동
            setDisable_A(true);
            setDisable_B(false); //한번 프롬프트에 접근하면 다시 들어갈 수 없음
          }}
        >
          <Text style={globalStyle.buttonText}>{Strategy_A}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disable_B}
          style={{
            backgroundColor: disable_B ? "#B3B6C4" : "#FFFFFF",
            ...styles.userButton,
          }}
          onPress={() => {
            let value = getPromptData_B();
            let conf = getConfirmation("B");
            navigation.navigate("Prompt", {
              value,
              id: id,
              Qindex: index,
              confirmation: conf,
            });
            setDisable_B(true);
            setDisable_C(false);
          }}
        >
          <Text style={globalStyle.buttonText}>{Strategy_B}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disable_C}
          style={{
            backgroundColor: disable_C ? "#B3B6C4" : "#FFFFFF",
            ...styles.userButton,
          }}
          onPress={() => {
            let value = getPromptData_C();
            let conf = getConfirmation("C");
            navigation.navigate("Prompt", {
              value,
              id: id,
              Qindex: index,
              confirmation: conf,
            });
            setDisable_C(true);
          }}
        >
          <Text style={globalStyle.buttonText}>{Strategy_C}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
  function getPromptData_A() {
    var PromptData = questionData.Strategy_A_Prompt.arrayValue.values;
    var PromptAnswer = questionData.Answer.mapValue.fields.A.arrayValue.values;
    console.log(PromptData[0].stringValue);
    console.log(PromptAnswer[0].stringValue);
    return { PromptData, PromptAnswer };
  }
  function getConfirmation(selector) {
    if (selector == "A") {
      var confirmation = questionData.Strategy_A_confirmation.stringValue;
    }
    if (selector == "B") {
      var confirmation = questionData.Strategy_B_confirmation.stringValue;
    }
    if (selector == "C") {
      var confirmation = questionData.Strategy_C_confirmation.stringValue;
    }
    return confirmation;
  }

  function getPromptData_B() {
    var PromptData = questionData.Strategy_B_Prompt.arrayValue.values;
    var PromptAnswer = questionData.Answer.mapValue.fields.B.arrayValue.values;
    console.log(PromptData[0].stringValue);
    console.log(PromptAnswer[0].stringValue);
    return { PromptData, PromptAnswer };
  }

  function getPromptData_C() {
    var PromptData = questionData.Strategy_C_Prompt.arrayValue.values;
    var PromptAnswer = questionData.Answer.mapValue.fields.C.arrayValue.values;
    console.log(PromptData[0].stringValue);
    console.log(PromptAnswer[0].stringValue);
    return { PromptData, PromptAnswer };
  }
};

const styles = StyleSheet.create({
  userButton: {
    maxWidth: "95%",
    padding: 14,
    margin: 15,
    borderRadius: 12,
  },
});

export default QuizScreen;
