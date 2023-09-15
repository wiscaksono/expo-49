import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Text, View } from "./themed";
import { TextStyles } from "../constants";
import Colors from "../constants/Colors";

type RadioButtonProps = {
  title: string;
  description?: string;
  isActive?: boolean;
} & TouchableOpacity["props"];

export const RadioButton = ({
  title,
  isActive,
  description,
  ...props
}: RadioButtonProps) => {
  return (
    <TouchableOpacity style={styles.container} {...props} activeOpacity={0.5}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
        {isActive ? (
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={Colors.primary[50]}
          />
        ) : (
          <Feather name="circle" size={24} color={Colors.neutral[80]} />
        )}
      </View>
      {description && <Text style={styles.desc}>{description}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: Colors.neutral[80],
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  titleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    ...TextStyles.TextBody["2-sb"],
  },
  desc: {
    marginTop: 5,
    marginRight: 50,
    color: Colors.neutral[50],
    ...TextStyles.TextBody[2],
  },
});
