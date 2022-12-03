import { StyleSheet, TextInput } from "react-native";

const CustomInput = ({ value, setValue, placeholder }) => {
  return (
    <TextInput
      //LoginScreen에서 CustomInput에 전달할 인자
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFFFFF",
    width: "83%",
    height: 48,
    paddingLeft: 15,
    borderRadius: 5,
    marginBottom: 18,
    alignSelf: "center",
  },
});

export default CustomInput;
