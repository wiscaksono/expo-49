import { StyleSheet, TextStyle } from "react-native";

import { View, Text } from "./themed";
import { TextStyles } from "../constants";

export const List = ({
  children,
  style,
}: {
  children: String;
  style?: TextStyle;
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.dot, style]}>{`\u2022`}</Text>
      <Text style={[styles.children, style]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingLeft: 8,
  },
  dot: {
    ...TextStyles.TextBody[2],
  },
  children: {
    marginLeft: 8,
    flex: 1,
    ...TextStyles.TextBody[2],
  },
});
