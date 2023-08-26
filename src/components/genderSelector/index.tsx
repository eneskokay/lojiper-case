import styles from "@/styles/components/genderSelector";
import { mainColor } from "@/styles/theme/colors";
import shadow from "@/styles/theme/shadows";
import texts from "@/styles/theme/texts";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "../icon";

function GenderSelector({
  value,
  setValue,
  title,
  formik,
  disabled = false,
}: Props) {
  return (
    <View style={styles.gendersContainer}>
      {title && (
        <Text
          style={[
            texts.text_400,
            {
              color: "gray",
              marginBottom: 5,
            },
          ]}
        >
          {title}
        </Text>
      )}

      <View style={styles.genders}>
        <TouchableOpacity
          disabled={disabled}
          style={[
            styles.genderSelector,
            shadow.black,
            value === "man" && {
              backgroundColor: mainColor,
            },
          ]}
          onPress={() => (formik ? setValue("gender", "man") : setValue("man"))}
        >
          <Icon
            name={"man"}
            fill={value === "man" ? "white" : "gray"}
            width={35}
            height={35}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderSelector,
            shadow.black,
            value === "woman" && {
              backgroundColor: mainColor,
            },
          ]}
          disabled={disabled}
          onPress={() =>
            formik ? setValue("gender", "woman") : setValue("woman")
          }
        >
          <Icon
            name={"woman"}
            fill={value === "woman" ? "white" : "gray"}
            width={35}
            height={35}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default GenderSelector;
