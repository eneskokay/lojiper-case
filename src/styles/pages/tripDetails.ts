import { StyleSheet } from "react-native";
import { getParsedCommandLineOfConfigFile } from "typescript";

const tripDetailsStyle = StyleSheet.create({
  busContainer: {
    width: 340,
    height: 140,
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderColor: "gray",
    marginVertical: 8,
  },
  top: { display: "flex", flexDirection: "row" },
  bottom: { display: "flex", flexDirection: "row" },
  seatsContainer: {},
  seat: {
    margin: 4,
    backgroundColor: "white",
    width: 33,
    height: 33,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  InputsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: 340,
  },
  AddClientButton: { backgroundColor: "gray", width: 60, height: 60 },
  clientsContainer: { width: 340, display: "flex", flexDirection: "column" },
  client: {
    backgroundColor: "red",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
  },
});

export default tripDetailsStyle;
