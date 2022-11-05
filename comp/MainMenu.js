import { Text, View, StyleSheet, Button } from "react-native";
import Toast from "react-native-root-toast";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function MainMenu(props) {
  var loginData = JSON.parse(JSON.stringify(props)); //JSON데이터 추출 1단계
  console.log(loginData);
  // var idData = loginData.id;
  // var db = loginData.db;
  // console.log(idData);
  // console.log(db);
  // async function isIdHasQuestionData() {
  //   console.log(idData);
  //   if (idData == null) {
  //     alert("ID Data corrupted");
  //   } else {
  //     const docR = doc(db, "User", idData);
  //     const docSnap = await getDoc(docR);
  //     if (docSnap.exists()) {
  //       console.log("exist");
  //     } else {
  //       await setDoc(docR, {
  //         Q1: false,
  //       });
  //     }
  //   }
  // }
  return (
    <View style={styles.container}>
      <Text>This is MainMenu! Yeah!</Text>
      {/* <Button title="GET ID" onPress={isIdHasQuestionData}></Button> */}
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
