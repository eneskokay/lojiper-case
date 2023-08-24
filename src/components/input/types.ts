import { DimensionValue, TextInputProps } from "react-native";

export default interface Props extends TextInputProps {
  type?: string;
  placeholder?: string;
  width?: DimensionValue;
  height?: DimensionValue;
  error?: boolean;
}
