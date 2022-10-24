import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./comp/LoginMenu";
import MainMenu from "./comp/MainMenu";
import Register from "./comp/Register";
const Stack = createNativeStackNavigator(); //네비게이션 스택 생성

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffbf00",
          },
          headerTintColor: "#fff", //헤더 텍스트 색상
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
        <Stack.Screen name="MainMenu" component={MainMenu}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
} //컴포넌트들은 모두 Stack의 컴포넌트로 사용됨

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
