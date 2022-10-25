import React, { useState } from "react";
import { View, Button } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import TextInputMethod from "./TextInput";

export default function Register(props) {
  const auth = props.auth;
  console.log(auth);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState({ pw: "", pwCheck: "" });

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, ID, PW.pw)
      .then(() => {
        alert("계정생성됨");
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
      alert("비밀번호가 일치하지 않습니다");
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
