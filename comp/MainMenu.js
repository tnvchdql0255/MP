import { 
  Text, 
  View, 
  StyleSheet, 
  Button, 
  Image, 
  ScrollView, 
  TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
/*
let imagePath1 = require('../assets/Q1.png');
let imagePath2 = require('../assets/Q2.png');
let imagePath3 = require('../assets/Q3.png');
let imagePath4 = require('../assets/Q4.png');
let imagePath5 = require('../assets/Q5.png');
let imagePath6 = require('../assets/Q6.png');
let imagePath7 = require('../assets/Q7.png');
let imagePath8 = require('../assets/Q8.png');
*/
export default function MainMenu(props) {
  console.log(props);
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.questionView1}>
        <TouchableOpacity>
          <Text>Question 1    </Text>
          
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <View style={styles.questionView2}>
        <TouchableOpacity>
          <Text>Question 2    </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <View style={styles.questionView3}>
        <TouchableOpacity>
          <Text>Question 3    </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <View style={styles.questionView4}>
        <TouchableOpacity>
          <Text>Question 4    </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <View style={styles.questionView5}>
        <TouchableOpacity>
          <Text>Question 5    </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <View style={styles.questionView6}>
        <TouchableOpacity>
          <Text>Question 6    </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <View style={styles.questionView7}>
        <TouchableOpacity>
          <Text>Question 7    </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <View style={styles.questionView8}>
        <TouchableOpacity>
          <Text>Question 8    </Text>
        </TouchableOpacity>
        <BouncyCheckbox
          style={styles.checkbox}
          size={25}
          fillColor="orange"
          unfillColor="#FFFFFF"
          text="Clear"
        />
      </View>

      <Button
        title="GotoLoginScreen"
        onPress={() => props.navigation.navigate("LoginScreen")}
      ></Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  questionView1:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row", //좌 -> 우로 생성
  },
  questionView2:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
  questionView3:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
  questionView4:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
  questionView5:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
  questionView6:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
  questionView7:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
  questionView8:{
    flex: 2,
    alignItems: "center",
    flexDirection: "row"
  },
});
