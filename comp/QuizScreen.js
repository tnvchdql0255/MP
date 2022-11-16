import React, { useState } from "react";
import { Text, View,  StyleSheet, BackHandler, TouchableOpacity, ScrollView, Button } from "react-native";
import { navigation } from "@react-navigation/native";
import InputSol from "./InputSol";
import { Doc,  setDoc, addDoc, firestore, Collection} from 'firebase/firestore';
import { link } from 'react-native';

const QuizScreen = (props) => {
  const [quiz, setQuiz] = useState("")

  function Read() {
    const [question, setQuestion] = useState()
    const questionCollection = firestore().collection('Question') // firebase에서 question DB 불러오기

    const callRead = () => {
      
    }
  }

  return (
    <View>
      <ScrollView>
        <Text style={styles.quizText}>{Read}</Text>
        
        <TouchableOpacity
          style={styles.solButton}
          onPress={() => {
            props.navigation.navigate("InputSol") // 풀이 1 선택하면 풀이과정 입력하는 새로운 component로 이동
          }}
        >
          <Text style={styles.solText}>
            Write an equation to solve the problem.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.solButton}
          // onPress={() => {
          //   navigation.navigate("InputSol");
          // }}
        >
          <Text style={styles.solText}>
            Add on the shipping fee until I get to $85,75.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.solButton}
          // onPress={() => {
          //   navigation.navigate("InputSol");
          // }}
        >
          <Text style={styles.solText}>
            Subtract away from $85,75 until I get to O.
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

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
    // borderWidth:1, // 테두리
    // backgroundColor: "#3498db",
    backgroundColor: "#FFFAA0",
    padding: 16,
    margin: 10,
    borderRadius: 12,
  },

  solText: {
    color: "#000000",
    fontSize: 22,
  },
});

export default QuizScreen;
