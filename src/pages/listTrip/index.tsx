import { useState, useEffect, useContext } from "react";
import { View, Text } from "react-native";
import globalStyle from "@/styles/common/global";
import { BookingContext } from "@/context/bookingContext";

function ListTrip({ navigation }) {
  const context = useContext(BookingContext);
  useEffect(() => {
    // context.tripInfos;
  }, []);
  return (
    <View
      style={[
        globalStyle.container,
        { display: "flex", alignItems: "center", width: "100%" },
      ]}
    >
      <View style={{ width: 340, paddingVertical: 6 }}>
        <Text>sdfsdfjkhsd</Text>
      </View>
    </View>
  );
}

export default ListTrip;
