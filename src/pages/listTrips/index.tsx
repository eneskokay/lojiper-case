import { View, Text, TouchableOpacity } from "react-native";
import globalStyle from "@/styles/common/global";
import { itemType } from "./types";
import styles from "@/styles/pages/listTrip";
import shadow from "@/styles/theme/shadows";
import texts from "@/styles/theme/texts";
import Icon from "@/components/icon";

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
        <TouchableOpacity
          onPress={() => navigation.navigate("tripDetails", { id: item.id })}
          style={[shadow.black, styles.card]}
        >
          <View style={[styles.cardHead]}>
            <Text style={[texts.text_400]}>
              {item.from} - {item.to} Seferi
            </Text>
            <Text style={[texts.text_100, { color: "gray" }]}>
              {item.tripType === "single" ? "Tek Gidiş" : "Gidiş Dönüş"}
            </Text>
          </View>
          <View style={[styles.cardBottom]}>
            <View style={styles.seatsContainer}>
              <View style={styles.seat}>
                <Icon name="man" fill="#424242" width="25" height="25" />
                <Text style={[texts.text_200]}>{item.manPassenger}</Text>
              </View>
              <View style={styles.seat}>
                <Icon name="woman" fill="#424242" width="25" height="25" />
                <Text style={[texts.text_200]}>{item.womanPassenger}</Text>
              </View>
              <View style={styles.seat}>
                <Text
                  style={[
                    texts.text_300,
                    { fontWeight: "900", color: "#424242" },
                  ]}
                >
                  BOŞ
                </Text>
                <Text style={[texts.text_200]}>{item.emptySeats}</Text>
              </View>
            </View>
            <View style={{ display: "flex", justifyContent: "space-between" }}>
              <View></View>
              <Text style={[texts.text_200]}>
                {item.startDate.toISOString().slice(0, 10)}
              </Text>
              <Text style={[texts.text_200]}>
                {item.endDate && item.endDate.toISOString().slice(0, 10)}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default ListTrips;
