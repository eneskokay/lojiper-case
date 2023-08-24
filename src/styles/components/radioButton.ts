import { StyleSheet } from "react-native";
import { mainColor } from "../theme/colors";

const radioButtonStyle = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 12,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 750,
  },
});

export default radioButtonStyle;
