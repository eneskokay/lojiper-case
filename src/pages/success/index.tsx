import globalStyle from "@/styles/common/global";
import texts from "@/styles/theme/texts";
import {
  StackActions,
  useNavigationContainerRef,
} from "@react-navigation/native";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

function Success({ navigation }) {
  return (
    <View
      style={[
        globalStyle.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Image
        source={require("../../../assets/successfully.png")}
        style={{ width: 300, height: 300 }}
      />
      <Text style={[texts.text_700]}>İşlem Başarılı!</Text>
      <TouchableOpacity
        style={globalStyle.button}
        onPress={() => {
          navigation.push("searchTrip", {});
          // navigation.navigate("searchTrip");
        }}
      >
        <Text style={[texts.text_400, { color: "white" }]}>Ana Sayfa</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Success;
