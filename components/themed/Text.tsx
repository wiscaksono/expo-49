import { Text as DefaultText } from "react-native";

type TextProps = DefaultText["props"];

export const Text = (props: TextProps) => {
  return (
    <DefaultText style={[{ fontFamily: "Inter" }, props.style]} {...props} />
  );
};
