import { StyleSheet } from "react-native";

const listTripStyle = StyleSheet.create({
  card: {
    width: 340,
    height: 130,
    backgroundColor: "white",
    borderRadius: 16,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  cardHead: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: "100%",
  },
  cardBottom: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  seatsContainer: { display: "flex", flexDirection: "row" },
  seat: { display: "flex", alignItems: "center", marginRight: 12 },
});

export default listTripStyle;
