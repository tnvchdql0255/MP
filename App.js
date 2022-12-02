import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./comp/LoginScreen";
import MainMenu from "./comp/MainMenu";

const Stack = createStackNavigator();

export default function App() {
  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  // const [Str, setStr] = useState("");
  // const [Data, setData] = useState("");
  // function create() {
  //   setDoc(doc(db, "Question", "Q8"), {

  //   })
  //     .then(() => {
  //       alert("New Question submitted");
  //     })
  //     .catch((error) => {
  //       alert("failed to upload:" + { error });
  //     });
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    borderWidth: 1,
    minWidth: "80%",
    padding: 10,
  },
});
