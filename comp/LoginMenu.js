import { Text, View, StyleSheet, Button } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function LoginScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is LoginScreen</Text>
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
});
