import {
  View,
  Text,
  Modal,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import TextInputMethod from "./TextInput";

export default function ModalContent(props) {
  const [input, setInput] = useState();
  return (
    <TouchableOpacity disabled={false} style={styles.container}>
      <View style={styles.modal}>
        <View style={styles.textView}>
          <Text style={styles.text}>{props.oeq}</Text>
        </View>
        <View style={styles.textView}>
          <TextInputMethod
            inputData={input}
            onChangeText={(e) => setInput(e)}
            secureTextEntry={false}
            placeholder="write here"
          ></TextInputMethod>
        </View>
        <View style={styles.buttonsView}>
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={props.modalOff}
          >
            <Text style={[styles.text, { color: "blue" }]}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    height: "30%",
    width: "50%",
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    margin: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  touchableOpacity: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  buttonsView: {
    width: "100%",
    flexDirection: "row",
  },
});
