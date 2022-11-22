import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  Button,
  Modal,
} from "react-native";
import ModalContent from "./ModalContent";

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
  const [disable_B, setDisable_B] = useState(false);
  const [disable_C, setDisable_C] = useState(false);
  const [modalVisable, setModalVisable] = useState(true);
  //Strategy 버튼 클릭 가능여부 제어 변수

  function modalOff() {
    setModalVisable(false);
  }
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisable}
        onRequestClose={() => setModalVisable(false)}
      >
        <ModalContent modalOff={modalOff} oeq={openEndedQ}></ModalContent>
      </Modal>
      <ScrollView>
        <Text style={styles.quizText}> {mainQuestion} </Text>
        <TouchableOpacity // 버튼 대신 TouchableOpacity 사용
          disabled={disable_A}
          style={{
            backgroundColor: disable_A ? "#5ED85A" : "#FFFF33",
            ...styles.solButton,
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
            setDisable_A(true); //한번 프롬프트에 접근하면 다시 들어갈 수 없음
          }}
        >
          <Text style={styles.solText}>{Strategy_A}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disable_B}
          style={{
            backgroundColor: disable_B ? "#5ED85A" : "#FFFF33",
            ...styles.solButton,
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
          }}
        >
          <Text style={styles.solText}>{Strategy_B}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={disable_C}
          style={{
            backgroundColor: disable_C ? "#5ED85A" : "#FFFF33",
            ...styles.solButton,
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
          <Text style={styles.solText}>{Strategy_C}</Text>
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
  container: {
    flex: 1,
    height: 50,
    backgrtundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  quizText: {
    paddingTop: 30,
    width: "90%",
    fontSize: 25,
    margin: 25,
  },

  solButton: {
    padding: 16,
    margin: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#000000",
  },

  solText: {
    color: "#000000",
    fontSize: 22,
  },
});

export default QuizScreen;
