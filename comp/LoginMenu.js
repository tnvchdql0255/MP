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
import Toast from "react-native-root-toast";

export default function LoginScreen(props) {
  const auth = props.auth;
  const [IDinputData, setIDInputData] = useState("lim1@test.com");
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
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome{"\n"}sign in to continue</Text>
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

      <TouchableOpacity style={styles.button}  onPress={() => handleLogin()}>
        <Text style={styles.text}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("Register")}>
        <Text
          style={styles.text}
          
        >
          Register
        </Text>
      </TouchableOpacity>
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
