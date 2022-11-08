import { Text, View, StyleSheet, Button } from "react-native";
import Toast from "react-native-root-toast";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import { db } from "./firebaseConfig";

export default function MainMenu({ navigation, route }) {
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
  return (
    <View style={styles.container}>
      <Text>This is MainMenu! Yeah!</Text>
      <Button title="GET ID" onPress={isIdHasQuestionData}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});