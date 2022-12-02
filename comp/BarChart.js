import React, { Component, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
} from "react-native";
import { getDocs, collection, doc, query } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { BarChart } from "react-native-chart-kit";

const MyBarChart = (props) => {
  useEffect(() => {
    getUserData(); // 렌더링 될 때 getUserData() 실행해주기
  }, []);
  const [userListData, setULD] = useState([]);
  const [userPointData, setUPD] = useState([]);
  var UListData = [];
  var UPointData = [];
  async function getUserData() {
    //학생의 아이디, 점수 데이터 db에서 받아오는 함수
    const q = query(collection(db, "UserStatus"));
    const querySnapshot = await getDocs(q);
    var data = JSON.parse(JSON.stringify(querySnapshot));
    var userList = data._snapshot.docChanges;
    for (var x = 0; x < userList.length; x++) {
      UListData = [
        ...UListData,
        userList[x].doc.data.value.mapValue.fields.uID.stringValue,
      ];

      UPointData = [
        ...UPointData,
        userList[x].doc.data.value.mapValue.fields.QuestionStatus.integerValue,
      ];
    }
    setULD([...UListData]); // 배열에 값 복사
    setUPD([...UPointData]); // 배열에 값 복사
    console.log(UListData);
    console.log(UPointData);
  }

  return (
    <View>
      <Text style={styles.header}>Student Score</Text>
      <BarChart
        data={{
          labels: [...userListData],
          datasets: [
            {
              data: [...userPointData],
            },
          ],
        }}
        width={Dimensions.get("window").width - 16}
        height={220}
        // yAxisLabel={"P"}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "#eff3ff",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
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

export default MyBarChart;
