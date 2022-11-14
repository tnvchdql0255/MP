import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import TextInputMethod from "./TextInput";
import { LinearGradient } from "expo-linear-gradient";
import { signInWithEmailAndPassword } from "firebase/auth";

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
      <Text style={styles.welcome}>Welcome{"\n"}sign in to countunue</Text>
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
      style={styles.button}>
        <Text
        style={styles.text}
        onPress={() => handleLogin()}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.button}
      >
        <Text
          style={styles.text}
          onPress={() => props.navigation.navigate("Register")}
        >
          Register
        </Text>
      </TouchableOpacity>

      {/* <Button style = {styles.button} title="Login" onPress={() => handleLogin()}></Button>
      <Button style = {styles.button}
        title="Register"
        onPress={() => props.navigation.navigate("Register")}
      ></Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DAEA",
    alignItems: "center",
    // justifyContent: "center",
  },

  welcome: {
    // fontFamily: "",
    fontSize: 45,
    fontWeight: "bold",
    // marginLeft: 40,
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
    // fontStyle: "bold"
  }
});
