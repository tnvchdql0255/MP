import React, { useState } from "react";
import { View, Text,  TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";
import QuizScreen from "./QuizScreen";

const InputSol = (props) => {
  const [solInput, setSolInput] = useState("");

  return (
    <View style={styles.contaner}>
      {/* 선택한 풀이 */}
      <Text style={styles.solPick}>
        Write an equation to solve the problem.
      </Text>

      {/* 풀이 BOX */}
      <TextInput style={styles.solBox}></TextInput>

      {/* 풀이 Text */}
      <TouchableOpacity
        style={styles.solInput}
        onPress={() => {
          props.navigation.navigate("QuizScreen");
        }}
      ></TouchableOpacity>

      {/* 제출 Button */}
      <TouchableOpacity style={styles.save}>
        {/* 버튼 이름 영어로 */}
        <Text style={styles.solInput}>제출</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // 선택한 풀이
  solPick: {
    paddingTop: 30,
    fontSize: 25,
    margin: 30,
  },

  // 풀이 box
  solBox: {
    margin: 30,
    padding: 10,
    fontSize: 20,
    // width: 250,
    height: 100,
    multiline: "true",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "top",
  },

  // 풀이 Text
  solInput: {
    color: "#000000",
    fontSize: 22,
    alignItems: "center",
    // textAlignVertical: "top"
  },

  // 답안 제출(저장) 버튼
  save: {
    backgroundColor: "#FFFAA0",
    padding: 15,
    width: 100,
    margin: 30,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InputSol;
