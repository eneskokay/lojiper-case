import { DimensionValue, StyleSheet } from "react-native";
import { mainColor } from "./colors";

const shadow = StyleSheet.create({
  black: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default shadow;
