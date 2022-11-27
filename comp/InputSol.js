import React, { useState } from "react";
import { View, Text,  TextInput, StyleSheet, TouchableOpacity } from "react-native";

const InputSol = (props) => {
  const [solInput, setSolInput] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.solPick}>
        Write an equation to solve the problem.
      </Text>
      <TextInput style={styles.solBox}></TextInput>
      <TouchableOpacity
        style={styles.solInput}
        onPress={() => {
          props.navigation.navigate("QuizScreen");
        }}
      ></TouchableOpacity>
      <TouchableOpacity style={styles.save}>
        <Text style={styles.solInput}>Submit</Text>
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

  solPick: {
    paddingTop: 30,
    fontSize: 25,
    margin: 30,
  },

  solBox: {
    margin: 30,
    padding: 10,
    fontSize: 20,
    height: 100,
    multiline: "true",
    borderColor: "#999",
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "top",
  },

  solInput: {
    color: "#000000",
    fontSize: 22,
    alignItems: "center",
    // textAlignVertical: "top"
  },

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
