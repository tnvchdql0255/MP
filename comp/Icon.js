import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import Toast from "react-native-root-toast";

export default function icon(props) {
  return (
    <View>
      <Icon
        style={styles.icon}
        name="Email"
        type="MaterialIcons"
        asize={20}
      ></Icon>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 10,
  },
});
