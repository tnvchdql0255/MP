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
//BarChart 함수
const MyBarChart = () => {
  useEffect(() => {
    getUserData(); //렌더링 될 때 getUserData() 실행해주기
  }, []);
  //BarChart Labels에 학생 아이디 넣기위한 state
  const [userListData, setULD] = useState([]);
  //BarChart data에 학생 점수 넣기위한 state
  const [userPointData, setUPD] = useState([]);
  var UListData = []; //학생 ID 저장하기 위한 배열
  var UPointData = []; //학생 점수 저장하기 위한 배열
  var userList = [];
  //학생의 아이디, 점수 데이터 db에서 받아오는 함수
  async function getUserData() {
    //firestore의 UserStatus 데이터에 접근
    const q = query(collection(db, "UserStatus"));
    const querySnapshot = await getDocs(q);
    var data = JSON.parse(JSON.stringify(querySnapshot)); //JSON 데이터 추출
    //JSON 데이터 추출한 곳에서 학생의 ID에 접근하여 userList 배열에 저장
    userList = data._snapshot.docChanges;
    for (var x = 0; x < userList.length; x++) {
      UListData = [
        ...UListData,
        userList[x].doc.data.value.mapValue.fields.uID.stringValue,
      ]; // 학생의 ID를 UListData 배열에 저장

      UPointData = [
        ...UPointData,
        userList[x].doc.data.value.mapValue.fields.QuestionStatus.integerValue,
      ]; // 학생의 점수를 UPointData 배열에 저장
    }
    setULD([...UListData]); // 배열에 값 복사
    setUPD([...UPointData]); // 배열에 값 복사
  }

  return (
    <View>
      <Text style={styles.header}>Student Score</Text>
      <ScrollView>
        <BarChart
          data={{
            labels: userListData, // labels에 userListData 넣기
            datasets: [
              {
                data: userPointData, // data에 userPointData 넣기
              },
            ],
          }}
          width={Dimensions.get("window").width}
          height={650}
          verticalLabelRotation={90}
          withInnerLines={true}
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
            marginVertical: 5,
            borderRadius: 16,
          }}
        />
      </ScrollView>
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
    padding: 15,
    marginTop: 5,
  },
});

export default MyBarChart;
