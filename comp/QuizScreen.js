import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  BackHandler,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import {
  Doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  doc,
} from "firebase/firestore";

const QuizScreen = ({ navigation, route }) => {
  var questionData = route.params.questionData;
  const index = route.params.index;
  questionData = questionData[index].doc.data.value.mapValue.fields;
  console.log(questionData);
  var mainQuestion = questionData.Main_question.stringValue;
  var Strategy_A = questionData.Strategy_A.stringValue;
  var Strategy_B = questionData.Strategy_B.stringValue;
  var Strategy_C = questionData.Strategy_C.stringValue;
  function getPromptData_A() {
    var PromptData = questionData.Strategy_A_Prompt.arrayValue.values;
    var PromptAnswer = questionData.Answer.mapValue.fields.A.arrayValue.values;
    console.log(PromptData[0].stringValue);
    console.log(PromptAnswer[0].stringValue);
    return { PromptData, PromptAnswer };
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
  return (
    <View>
      <ScrollView>
        <Text style={styles.quizText}> {mainQuestion} </Text>
        <TouchableOpacity // 버튼 대신 TouchableOpacity 사용
          style={styles.solButton}
          onPress={() => {
            let value = getPromptData_A();
            navigation.navigate("Prompt", { value }); // 풀이 1 선택하면 풀이과정 입력하는 새로운 component로 이동
          }}
        >
          <Text style={styles.solText}>{Strategy_A}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.solButton}
          onPress={() => {
            let value = getPromptData_B();
            navigation.navigate("Prompt", { value });
          }}
        >
          <Text style={styles.solText}>{Strategy_B}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.solButton}
          onPress={() => {
            let value = getPromptData_C();
            navigation.navigate("Prompt", { value });
          }}
        >
          <Text style={styles.solText}>{Strategy_C}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
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
    backgroundColor: "#FFFAA0",
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
