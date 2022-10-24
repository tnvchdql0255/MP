import React, { useState } from "react";
import { View, Button } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import TextInputMethod from "./TextInput";

export default function Register() {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState({ pw: "", pwCheck: "" });
  const [code, setCode] = useState("");
  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, ID, PW.pw)
      .then(() => {
        alert("계정생성됨");
        console.log(user);
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
  function onChangeCode(event) {
    setCode(event);
  }
  function checkPW_isEqual() {
    if (PW.pw == PW.pwCheck) {
      handleCreateAccount();
    } else {
      alert("is not same");
    }
  }

  return (
    <View>
      <TextInputMethod
        inputData={ID}
        onChangeText={onChangeID}
        secureTextEntry={false}
        placeholder="아이디"
      ></TextInputMethod>
      <TextInputMethod
        inputData={PW.PW}
        onChangeText={onChangePW}
        secureTextEntry={true}
        placeholder="패스워드"
      ></TextInputMethod>
      <TextInputMethod
        inputData={PW.PWCheck}
        onChangeText={onChangePWC}
        secureTextEntry={true}
        placeholder="패스워드 재입력"
      ></TextInputMethod>
      <Button title="확인" onPress={checkPW_isEqual}></Button>
    </View>
  );
}
