import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-root-toast";
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import LoginScreen from "./LoginMenu";

export default function MainMenu({ navigation, route }) {
  const app = initializeApp(firebaseConfig);
  const [questionIndex, setQuestionIndex] = useState([]);
  const [questionData, setQuestionData] = useState();
  let loginData = JSON.parse(JSON.stringify(route)); //JSON데이터 추출 1단계
  loginData = loginData.params.id;
  console.log(loginData);

  useEffect(() => {
    isIdHasQuestionData();
    read();
  }, []);

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

  async function read() {
    // 파이어베이스 읽어오는 함수
    const q = query(collection(db, "Question"));
    const querySnapshot = await getDocs(q);
    const parsedData = JSON.parse(JSON.stringify(querySnapshot));
    var q_num = parsedData._snapshot.docChanges; // 문제 수 가져오는 부분
    setQuestionData(q_num);
    //docChanges에 모든 데이터 다들어있음
    var parsedQnum = Number(q_num.length);
    var questionIndexList = Array.from({ length: parsedQnum }, (v, i) => i + 1); // v: value, i: index
    setQuestionIndex([...questionIndex, ...questionIndexList]);
  }
  async function readSpec() {
    const q = query(collection(db, "Question"), where("Q1", "*Prompt*"));
    const querySnapshot = await getDocs(q);
  }
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style = {styles.text}>Hi,{"\n"}Click on the question number!</Text>
        {questionIndex.map((item, idx) => (
          <TouchableOpacity style = {styles.button}
            key={idx}
            onPress={() =>
              navigation.navigate("QuizScreen", { questionData, index: idx })
            }
          >
            <Text style={styles.questionLable}>{"Question " + item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DAEA",
    alignItems: "center", //세로
    justifyContent: "center", //가로
    // flexDirection: "row",
    paddingBottom: 50,
  },

  text: {
    fontSize: 35,
    fontWeight: "bold",
    // marginLeft: 40,
    marginTop: 70,
    paddingBottom: 50,
  },

  button: {
    // width: "75%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 13,
    margin: 12,
    borderRadius: 30,
  },

  questionLable: {
    color: "#000000",
    fontSize: 20
  },
});
