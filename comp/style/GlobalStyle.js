import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8DAEA",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    paddingBottom: 50,
  },

  topText: {
    fontSize: 45,
    fontWeight: "bold",
    maxWidth: "80%",
    marginTop: 80,
    marginRight: 200,
  },

  BottomText: {
    fontSize: 35,
    marginRight: 120,
    paddingBottom: 35,
    color: "#000000",
  },

  userButton: {
    width: "75%",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 14,
    margin: 15,
    borderRadius: 30,
  },

  buttonText: {
    fontSize: 20,
    color: "#000000",
  },

  question: {
    flex: 1,
    marginTop: 80,
    maxWidth: "90%",
    fontSize: 22,
    margin: 25,
    paddingBottom: 30,
    lineHeight: 30
  },
});
