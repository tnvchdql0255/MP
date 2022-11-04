import { 
  Text, 
  View, 
  StyleSheet, 
  Button, 
  Image, 
  ScrollView, 
  TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";
import {doc, setDoc, getDoc, getFirestore } from "firebase/firestore";


export default function MainMenu(props) {
  const db = props.db;
  async function read() {
    const docData = doc(db, "Question", "Q1");
    const docSnap = await getDoc(docData);
    if(docSnap.exists()) {
      alert(docSnap.data());
    }

  } 
  console.log(props);
  return (
    <ScrollView>
    <View style={styles.container}>
      <Button
        title="b"
        onPress={read}
      ></Button>
      <View style={styles.questionView1}>
        <TouchableOpacity>
          <Text>Question 1    </Text>
          
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <Button
        title="GotoLoginScreen"
        onPress={() => props.navigation.navigate("LoginScreen")}
      ></Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  questionView1:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row", //좌 -> 우로 생성
  },
  
  },
);
