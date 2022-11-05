import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./comp/firebaseConfig";
import { initializeApp } from "firebase/app";
import LoginScreen from "./comp/LoginMenu";
import MainMenu from "./comp/MainMenu";
import Register from "./comp/Register";
import { getFirestore } from "firebase/firestore";

const Stack = createNativeStackNavigator(); //네비게이션 스택 생성

export default function App() {
  const app = initializeApp(firebaseConfig); //파이어베이스 컨픽
  let auth = getAuth(app); //auth를 필요한 컴포넌트한테 넘기는 용
  //const db = getFirestore(app);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffbf00",
          },
          headerTintColor: "#fff", //헤더 텍스트 색상
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerBackTitleVisible: false, //뒤로가기옆에 텍스트 뜨는거 제거, 이거 없으면 플랫폼마다 다르게표시됨
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          children={({ navigation }) => (
            <LoginScreen auth={auth} navigation={navigation}></LoginScreen>
          )}
        ></Stack.Screen>
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          initialParams={{ id: null }} //Mainmenu에는 auth 대신 db 를 넘김
        ></Stack.Screen>
        <Stack.Screen
          name="Register"
          children={({ navigation }) => (
            <Register auth={auth} navigation={navigation}></Register>
          )}
        ></Stack.Screen>
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
