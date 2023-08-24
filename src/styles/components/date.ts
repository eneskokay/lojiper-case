import { StyleSheet } from "react-native";

const dateStyle = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
  },
  date: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
  },
  error: {
    backgroundColor: "#FFEDED",
  },
});

export default dateStyle;
