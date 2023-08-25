import { View, Text, TouchableOpacity } from "react-native";
import globalStyle from "@/styles/common/global";
import { itemType } from "./types";

import TicketCard from "@/components/ticketCard";

function ListTrips({ route, navigation }) {
  const availableTrips = route.params.availableTrips;
  return (
    <View
      style={[
        globalStyle.container,
        {
          display: "flex",
          alignItems: "center",
          width: "100%",
          paddingVertical: 10,
        },
      ]}
    >
      {availableTrips.map((item: itemType) => (
        <TicketCard
          item={item}
          clickable={true}
          navigationFunc={() =>
            navigation.navigate("tripDetails", { id: item.id })
          }
        />
      ))}
    </View>
  );
}

export default ListTrips;
