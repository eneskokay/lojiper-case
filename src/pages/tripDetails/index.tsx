import { View, Text, TouchableOpacity } from "react-native";
import globalStyle from "@/styles/common/global";

function TripDetails({ route, navigation }) {
  const id = route.params.id;
  console.log(id);
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
    ></View>
  );
}

export default TripDetails;
