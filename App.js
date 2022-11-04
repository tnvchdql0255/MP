import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import {
  doc,
  setDoc,
  getDoc,
  getFirestore,
  collection,
  getDocs,
  query,
} from "firebase/firestore";
import { firebaseConfig } from "./comp/firebaseConfig";
import { initializeApp } from "firebase/app";

export default function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [Str, setStr] = useState("");
  const [Data, setData] = useState("");
  function create() {
    setDoc(doc(db, "Question", "Q1"), {})
      .then(() => {
        alert("New Question submitted");
      })
      .catch((error) => {
        alert("failed to upload:" + { error });
      });
  }
  async function read() {
    //const docData = doc(db, "QnA");
    //const docSnap = await getDoc(docData);
    const q = query(collection(db, "Question"));
    const querySnapshot = await getDocs(q);
    const parsedData = JSON.parse(JSON.stringify(querySnapshot));
    console.log(parsedData);
    // if (docSnap.exists()) {
    //   setData("Document data: " + JSON.stringify(docSnap.data()));
    // } else {
    //   setData("No such document!");
    // }
  }
  return (
    <View style={styles.container}>
      <Text>Teacher App 0.0.1</Text>
      <TextInput
        style={styles.input}
        placeholder="inputQuery"
        value={Str}
        onChangeText={(e) => setStr(e)}
      ></TextInput>
      <Text>{Data}</Text>

      <Button title="send Query" onPress={create}></Button>
      <Button title="get data" onPress={read}></Button>
      <StatusBar style="auto" />
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
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    minWidth: "80%",
    padding: 10,
  },
});
