import { StyleSheet } from "react-native";

const inputStyle = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "white",
  },
  input: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
  },
  viewPassword: {
    width: 35,
    height: "100%",
    position: "absolute",
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    backgroundColor: "#FFEDED",
  },
});

export default inputStyle;
