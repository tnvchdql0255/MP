import { View, Image, StyleSheet } from "react-native";
//let imagePath1 = require('../assets/Q1.png');

export default function Question1(props) {
    return (
        <View>
            <Image 
                style = {{height: 50, width: 50}}
                source = {imagePath1}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    }
})