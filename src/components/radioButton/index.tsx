import React from "react";
import Props from "./types";
import { TouchableOpacity, View, Text } from "react-native";
import { mainColor } from "@/styles/theme/colors";
import styles from "@/styles/components/radioButton";
import texts from "@/styles/theme/texts";

function RadioButton({ buttons, setButtons, handleChange }: Props) {
  const handlePress = (index: number) => {
    setButtons((value) => {
      const newValue = [...value];
      newValue.forEach((property) => {
        property.selected = false;
      });
      newValue[index].selected = true;
      handleChange(newValue[index]["key"]);
      return newValue;
    });
  };

  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => handlePress(index)}
          key={index}
        >
          <View
            style={[
              { backgroundColor: item["selected"] ? mainColor : "#D0D0D0" },
              styles.radio,
            ]}
          ></View>
          <Text style={[texts.text_100, { marginLeft: 4, color: "gray" }]}>
            {item["title"]}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default RadioButton;
