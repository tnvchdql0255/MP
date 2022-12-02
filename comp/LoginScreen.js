import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { Firestore } from "firebase/firestore";
import { StatusBar } from "expo-status-bar";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const LoginScreen = (props) => {
  const [users, setUsers] = useState();
  const [Str, setStr] = useState("");
  const [Data, setData] = useState("");
  const read = async () => {
    const docR = doc(db, "Teacher", "James");
    const data = await getDoc(docR);
    const userName = data._document.data.value.mapValue.fields.name.stringValue; //firebase 선생님 정보 가져오는 부분
    // setUsers(data.docs.map(doc => ({ ...doc.data(), name: doc.name })));
    // console.log(userName);
    // console.log(JSON.parse(JSON.stringify(data)));
    if (Str == userName) {
      props.navigation.navigate("MainMenu");
    } else {
      alert("Login Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.signInTextContainer}>
        <Text style={styles.signInText}>HELLO,</Text>
        <Text style={styles.signInText}>THIS IS A TEACHER APP</Text>
        <Text style={styles.signInTextS}>Please log in to use the service</Text>

        {/* <TextInput
        style={styles.input}
        placeholder="name"
        value={Str}
        onChangeText={(e) => setStr(e)}
      ></TextInput> */}
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          source={require("../assets/teacher.png")}
        />
      </View>

      <View style={styles.signInTextContainer1}>
        <CustomInput value={Str} setValue={setStr} placeholder="Username" />
        <Text>{Data}</Text>
        <CustomButton onPress={read} text="Sign In" />
        {/* <Button title="Login" onPress={read}></Button> */}
        {/* <Button title="get data" onPress={read}></Button> */}
        <StatusBar style="auto" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#819FF7",
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    minWidth: "80%",
    padding: 10,
  },
  signInTextContainer: {
    flex: 2,
    marginTop: "10%",
    marginLeft: "0%",
    backgroundColor: "#819FF7",
  },
  signInTextContainer1: {
    flex: 5,
    marginTop: "12%",
    marginLeft: "0%",
    backgroundColor: "#819FF7",
  },
  signInText: {
    fontSize: 25,
    fontWeight: "500",
    color: "#FFFFFF",
    lineHeight: 29.3,
  },
  signInTextS: {
    fontSize: 12,
    fontWeight: "300",
    color: "#FFFFFF",
    marginTop: 5,
    marginBottom: 50,
    color: "#EEEEEE",
  },
  imageContainer: {
    flex: 2,
    marginTop: "5%",
    backgroundColor: "#819FF7",
  },
});

export default LoginScreen;
