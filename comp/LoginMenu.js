import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { useState } from "react";
import TextInputMethod from "./TextInput";
import { LinearGradient } from "expo-linear-gradient"; //npx expo install expo-linear-gradient
export default function LoginScreen(props) {
  const [IDinputData, setIDInputData] = useState("");
  const [PWinputData, setPWInputData] = useState("");

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
      <Text>Welcome to online study!</Text>
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
      <Button
        title="GotoMainMenu"
        onPress={() => props.navigation.navigate("MainMenu")}
      ></Button>
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
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
});
