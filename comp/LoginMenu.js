import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";
import TextInputMethod from "./TextInput";
import { LinearGradient } from "expo-linear-gradient"; //npx expo install expo-linear-gradient
import { signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-root-toast";

export default function LoginScreen(props) {
  const auth = props.auth;
  const [IDinputData, setIDInputData] = useState("");
  const [PWinputData, setPWInputData] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, IDinputData, PWinputData)
      .then((userCredentials) => {
        const user = userCredentials.user;
        Toast.show("환영합니다", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          animation: false,
          delay: 0,
        });
        props.navigation.navigate("MainMenu");
      })
      .catch((error) => {
        alert("로그인실패");
      });
  };

  function onChangeID(event) {
    setIDInputData(event);
  }
  function onChangePW(event) {
    setPWInputData(event);
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(240,163,10,0.8)", "transparent"]}
        style={styles.background}
      ></LinearGradient>
      <Text style={styles.textStyle}>Welcome to online study!</Text>
      <TextInputMethod
        inputData={IDinputData}
        onChangeText={onChangeID}
        secureTextEntry={false}
        placeholder="id"
      ></TextInputMethod>
      <TextInputMethod
        inputData={PWinputData}
        onChangeText={onChangePW}
        secureTextEntry={true}
        placeholder="password"
      ></TextInputMethod>
      <Button title="로그인" onPress={() => handleLogin()}></Button>
      <Button
        title="회원 가입"
        onPress={() => props.navigation.navigate("Register")}
      ></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: { fontWeight: "bold", fontSize: 30, margin: 20 },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
