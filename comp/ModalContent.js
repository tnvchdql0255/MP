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
            <Text style={[styles.text, { color: "#B3B6C4" }]}>OK</Text>
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
    padding: 13,
    margin: 12,
    borderRadius: 12,
  },
  modal: {
    height: "40%",
    width: "80%",
    paddingTop: 10,
    backgroundColor: "white",
    borderRadius: 12,
  },
  textView: {
    flex: 1,
    padding: 13,
    margin: 12,
    alignItems: "center",
  },
  text: {
    margin: 5,
    fontSize: 18,
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
