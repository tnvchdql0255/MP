import { Text, View, StyleSheet, Button, ScrollView } from "react-native";
import Toast from "react-native-root-toast";
import { doc, getDoc, setDoc, getDocs, collection, query } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { db } from "./firebaseConfig";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

export default function MainMenu({ navigation, route }) {
  const app = initializeApp(firebaseConfig);
  const [questionIndex, setQuestionIndex] = useState("")
  let loginData = JSON.parse(JSON.stringify(route)); //JSON데이터 추출 1단계
  loginData = loginData.params.id;
  console.log(loginData);
  async function isIdHasQuestionData() {
    console.log(loginData);
    if (loginData == null) {
      alert("ID Data corrupted");
    } else {
      const docR = doc(db, "UserStatus", loginData);
      const docSnap = await getDoc(docR);
      if (docSnap.exists()) {
        console.log("exist");
      } else {
        setDoc(docR, {
          Q1: true,
        })
          .then(() => {
            alert("New UserData sub");
          })
          .catch(() => {
            alert("something went wrong");
          });
      }
    }
  }
  async function read() { // 파이어베이스 읽어오는 함수
    const q = query(collection(db, "Question"));
    const querySnapshot = await getDocs(q);
    const parsedData = JSON.parse(JSON.stringify(querySnapshot));
    const q_num = parsedData._snapshot.docChanges; // 문제 수 가져오는 부분
    setQuestionIndex(q_num);
    console.log(typeof questionIndex);
  }
  return (
    
    <View style={styles.container1}>
      <Button title="aaa" onPress={read}></Button>
      <ScrollView>
      {/* {questionIndex.map((item, idx) => (
        <Text
          style = {styles.mainText}
          >{item}</Text>
        ))} */}
      </ScrollView>
          
        
      
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", //세로
    justifyContent: "center", //가로
    flexDirection: 'row',
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", //세로
    justifyContent: "center", //가로
    
  },
  item1: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  item2: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "center",
    
  },
  row1: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
    
  },
  row2: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  checkbox: {
    
  }
});