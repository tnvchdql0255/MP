import React, { useState } from "react";
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import TextInputMethod from "./TextInput";

export default function Register(props) {
  //회원가입 기능
  const auth = props.auth;
  console.log(auth);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState({ pw: "", pwCheck: "" });

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, ID, PW.pw)
      .then(() => {
        alert("Create ID !");
      })
      .catch((error) => {
        alert(error);
      });
  };

  function onChangeID(event) {
    setID(event);
  }
  function onChangePW(event) {
    setPW({ ...PW, pw: event });
  }
  function onChangePWC(event) {
    setPW({ ...PW, pwCheck: event });
  }
  function checkPW_isEqual() {
    if (PW.pw == PW.pwCheck) {
      handleCreateAccount();
    } else {
      alert("The passwords don't match");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>sign in</Text>
      <TextInputMethod
        inputData={ID}
        onChangeText={onChangeID}
        secureTextEntry={false}
        placeholder="ID(Email)"
      ></TextInputMethod>
      <TextInputMethod
        inputData={PW.PW}
        onChangeText={onChangePW}
        secureTextEntry={true}
        placeholder="Password"
      ></TextInputMethod>
      <TextInputMethod
        inputData={PW.PWCheck}
        onChangeText={onChangePWC}
        secureTextEntry={true}
        placeholder="RePassword"
      ></TextInputMethod>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={checkPW_isEqual}>
          Create ID
        </Text>
      </TouchableOpacity>

      {/* <Button title="Go to login" onPress={checkPW_isEqual}></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DAEA",
    alignItems: "center",
    justifyContent: "center",
  },

  welcome: {
    fontSize: 45,
    fontWeight: "bold",
    marginTop: 70,
    paddingBottom: 50,
  },

  button: {
    width: "75%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 13,
    margin: 12,
    borderRadius: 30,
  },

  text: {
    color: "#000000",
    fontSize: 20,
  },
});
