import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./comp/firebaseConfig";
import { initializeApp } from "firebase/app";

export default function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [Str, setStr] = useState("");
  function create() {
    setDoc(doc(db, "query", "testQuery"), {
      Data1: Str,
    })
      .then(() => {
        alert("New Question submitted");
      })
      .catch((error) => {
        alert("failed to upload:" + { error });
      });
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
      <Button title="send Query" onPress={create}></Button>
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
