import { Text, View, StyleSheet, Button } from "react-native";
export default function MainMenu(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text>This is MainMenu! Yeah!</Text>
      <Button
        title="GotoLoginScreen"
        onPress={() => props.navigation.navigate("QuizScreen")}
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
});
