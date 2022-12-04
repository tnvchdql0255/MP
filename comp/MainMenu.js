import {
  Text,
  View,
  StyleSheet,
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
import useStore from "./globalData";
import { globalStyle } from "./style/GlobalStyle";

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
    readUserStat();
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
    <View style={globalStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.topText}>Hi,</Text>
        <Text style={styles.BottomText}>Click on the question</Text>
        {questionIndex.map((item, idx) => (
          <TouchableOpacity
            style={styles.userButton}
            key={idx}
            onPress={() =>
              navigation.navigate("QuizScreen", {
                questionData,
                index: idx,
                id: loginData,
              })
            }
          >
            <Text style={globalStyle.buttonText}>{"Question " + item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  topText: {
    fontSize: 45,
    fontWeight: "bold",
    maxWidth: "100%",
    marginTop: 80,
    marginRight: 280,
  },

  BottomText: {
    fontSize: 35,
    marginRight: 90,
    paddingBottom: 35,
    color: "#000000",
  },

  userButton: {
    width: "90%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 14,
    margin: 15,
    borderRadius: 30,
  },
});
