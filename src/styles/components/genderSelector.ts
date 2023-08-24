import { StyleSheet } from "react-native";

const genderSelectorStyle = StyleSheet.create({
  gendersContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 4,
  },
  genders: {
    display: "flex",
    flexDirection: "row",
  },
  genderSelector: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 6,
  },
});

export default genderSelectorStyle;
