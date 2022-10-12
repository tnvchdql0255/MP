import { Text, View, StyleSheet, Button } from "react-native";
import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function MainMenu(props) {
  return (
    <View style={styles.container}>
      <Text>This is MainMenu! Yeah!</Text>
      <Button
        title="GotoLoginScreen"
        onPress={() => props.navigation.navigate("LoginScreen")}
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
