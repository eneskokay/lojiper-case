import styles from "@/styles/components/genderSelector";
import { mainColor } from "@/styles/theme/colors";
import shadow from "@/styles/theme/shadows";
import texts from "@/styles/theme/texts";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "../icon";

function GenderSelector({ value, setValue }) {
  return (
    <View style={styles.gendersContainer}>
      <Text
        style={[
          texts.text_400,
          {
            color: "gray",
            marginBottom: 5,
          },
        ]}
      >
        Cinsiyet Seçimi
      </Text>
      <View style={styles.genders}>
        <TouchableOpacity
          style={[
            styles.genderSelector,
            shadow.black,
            value === "male" && {
              backgroundColor: mainColor,
            },
          ]}
          onPress={() => setValue("gender", "male")}
        >
          <Icon
            name={"man"}
            fill={value === "male" ? "white" : "gray"}
            width={35}
            height={35}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderSelector,
            shadow.black,
            value === "female" && {
              backgroundColor: mainColor,
            },
          ]}
          onPress={() => setValue("gender", "female")}
        >
          <Icon
            name={"woman"}
            fill={value === "female" ? "white" : "gray"}
            width={35}
            height={35}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GenderSelector;
