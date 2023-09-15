import { View as DefaultView } from "react-native";

type ViewProps = DefaultView["props"];

export const View = (props: ViewProps) => {
  return <DefaultView style={[props.style]} {...props} />;
};
