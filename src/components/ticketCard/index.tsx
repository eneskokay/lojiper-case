import styles from "@/styles/components/ticketCard";
import shadow from "@/styles/theme/shadows";
import texts from "@/styles/theme/texts";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../icon";
import Props from "./types";

function TicketCard({ item, clickable, navigationFunc }: Props) {
  return (
    <TouchableOpacity
      onPress={navigationFunc}
      disabled={!clickable}
      style={[shadow.black, styles.card]}
    >
      <View style={[styles.cardHead]}>
        <View>
          <Text style={[texts.text_400]}>
            {item.from} - {item.to} Seferi
          </Text>
          <Text style={[texts.text_100, { color: "gray" }]}>
            {item.tripType === "single" ? "Tek Gidiş" : "Gidiş Dönüş"}
          </Text>
        </View>
        <View>
          <Text style={texts.text_400}>{item.price}TL</Text>
        </View>
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
              style={[texts.text_300, { fontWeight: "900", color: "#424242" }]}
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
            {" - "}
            {item.startTime}
          </Text>
          {item.endDate && (
            <Text style={[texts.text_200]}>
              {item.endDate.toISOString().slice(0, 10)}
              {" - "}
              {item.endTime}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default TicketCard;
