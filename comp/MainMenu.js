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
//import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useEffect, useState } from "react";
import useStore from "./globalData";

export default function MainMenu({ navigation, route }) {
  const app = initializeApp(firebaseConfig);
  const [questionIndex, setQuestionIndex] = useState([]);
  const [questionData, setQuestionData] = useState();
  const data = useStore((state) => state.data);
  const addData = useStore((state) => state.addData);
  const setData = useStore((state) => state.setData);
  let loginData = JSON.parse(JSON.stringify(route)); //JSON데이터 추출 1단계
  loginData = loginData.params.id;
  console.log(loginData);

  useEffect(() => {
    isIdHasQuestionData();
    read();
  }, []);

  async function isIdHasQuestionData() {
    if (loginData == null) {
      alert("ID Data corrupted");
    } else {
      const docR = doc(db, "UserStatus", loginData);
      const docSnap = await getDoc(docR);
      if (docSnap.exists()) {
        console.log("exist");
      } else {
        setDoc(docR, {
          uID: loginData,
          QuestionStatus: 0,
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

  async function readUserStat() {
    // 파이어베이스 읽어오는 함수
    const q = query(collection(db, "UserStatus"));
    const querySnapshot = await getDocs(q);
    const parsedData = JSON.parse(JSON.stringify(querySnapshot));
    var userList = parsedData._snapshot.docChanges; // 문제 수 가져오는 부분
    console.log(userList);
    for (let i = 0; i < userList.length; i++) {
      if (
        userList[i].doc.data.value.mapValue.fields.uID.stringValue == loginData
      ) {
        console.log(
          userList[i].doc.data.value.mapValue.fields.QuestionStatus.integerValue
        );
        setData(
          Number(
            userList[i].doc.data.value.mapValue.fields.QuestionStatus
              .integerValue
          )
        );
        break;
      }
    }
  }
  return (
    <View style={styles.container1}>
      <ScrollView>
        <Button title="get" onPress={readUserStat}></Button>
        {questionIndex.map((item, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() =>
              navigation.navigate("QuizScreen", {
                questionData,
                index: idx,
                id: loginData,
              })
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
  container1: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", //세로
    justifyContent: "center", //가로
    flexDirection: "row",
  },
  questionLable: {
    flex: 1,
    backgroundColor: "#e0e0e0",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#eeeeee",
    fontSize: 20,
    paddingLeft: 5,
  },
});
