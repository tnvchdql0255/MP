import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
// import { getDoc, collection, doc, query } from "firebase/firestore";
// import { db } from "./firebaseConfig";
import MyBarChart from "./BarChart";

const MainMenu = (props) => {
  return (
    <View style={styles.container}>
      <MyBarChart />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#819FF7",
    // justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 16,
  },
});

export default MainMenu;
