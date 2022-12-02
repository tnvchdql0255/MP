import { StyleSheet, TextInput } from "react-native";
//세부적인 설정은 개발자가 이 컴포넌트를 불러와서 설정
export default function TextInputMethod(props) {
  return (
    <TextInput
      style={styles.inputStyle}
      value={props.inputData}
      multiline={false}
      secureTextEntry={props.secureTextEntry}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
    />
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    width: "80%",
    height: 60,
    paddingHorizontal: 10,
    opacity: 0.6,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginVertical: 20,
    fontSize: 20,
    margin: 10,
  },
});
