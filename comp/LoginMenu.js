import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import TextInputMethod from "./TextInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-root-toast";
import { globalStyle } from "./style/GlobalStyle";

export default function LoginScreen(props) {
  const auth = props.auth;
  const [IDinputData, setIDInputData] = useState("hee@test.com");
  const [PWinputData, setPWInputData] = useState("000000");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, IDinputData, PWinputData)
      .then((userCredentials) => {
        Toast.show("welcome", {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          animation: false,
          delay: 0,
        });
        props.navigation.navigate("MainMenu", { id: IDinputData }); // send idData to mainMenu
      })
      .catch((error) => {
        alert("Login failure");
      });
  };

  function onChangeID(event) {
    setIDInputData(event);
  }
  function onChangePW(event) {
    setPWInputData(event);
  }

  return (
    <View style={globalStyle.container}>
      <Text style={globalStyle.topText}>Welcome</Text>
      <Text style={globalStyle.BottomText}>sign in to continue</Text>
      <TextInputMethod
        inputData={IDinputData}
        onChangeText={onChangeID}
        secureTextEntry={false}
        placeholder="ID"
      ></TextInputMethod>

      <TextInputMethod
        inputData={PWinputData}
        onChangeText={onChangePW}
        secureTextEntry={true}
        placeholder="PASSWORD"
      ></TextInputMethod>

      <TouchableOpacity
        style={globalStyle.userButton}
        onPress={() => handleLogin()}
      >
        <Text style={globalStyle.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={globalStyle.userButton}
        onPress={() => props.navigation.navigate("Register")}
      >
        <Text style={globalStyle.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
