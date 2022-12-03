import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";

const LoginScreen = (props) => {
  // const [users, setUsers] = useState();
  const [Str, setStr] = useState("");
  // const [Data, setData] = useState("");
  // db에서 선생님 데이터 읽어오는 함수
  const read = async () => {
    // firestore의 Teacher 에서 Teacher의 정보 저장
    const docR = doc(db, "Teacher", "TeacherName");
    const data = await getDoc(docR);
    //firebase 선생님 이름 가져오는 부분
    const userName = data._document.data.value.mapValue.fields.name.stringValue;
    const userName1 =
      data._document.data.value.mapValue.fields.name1.stringValue;

    if (Str == userName || Str == userName1) {
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
      </View>
      <View style={styles.imageContainer}>
        <Image
          //가로 세로 중 넓은 부분이 100%를 차지할 때 까지만 이미지를 늘리는 것
          style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          source={require("../assets/teacher.png")}
        />
      </View>
      <View style={styles.signInTextContainer1}>
        <CustomInput value={Str} setValue={setStr} placeholder="Username" />
        {/* <Text>{Data}</Text> */}
        <CustomButton onPress={read} text="Sign In" />
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
