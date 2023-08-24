import { StyleSheet } from "react-native";
import { linkBlue, mainColor } from "../theme/colors";

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
  },
  centeredContent: {
    alignItems: "center",
  },
  formContainer: {
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    paddingVertical: 8,
  },
  errorContainer: {
    position: "relative",
    marginBottom: 10,
  },
  backgroundImage: {
    width: "100%",
    position: "absolute",
    top: -100,
  },
  errorText: {
    color: "red",
    marginTop: 1,
    position: "absolute",
    fontSize: 13,
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 1000,
  },
  button: {
    backgroundColor: mainColor,
    width: 180,
    height: 40,
    borderRadius: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 12,
  },
  link: {
    color: linkBlue,
  },
});

export default globalStyle;
