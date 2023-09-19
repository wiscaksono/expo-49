import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { View } from "../components/themed";
import { BlueBankSM } from "../assets/icons/blue-bank";
import Colors from "../constants/Colors";
import { TextStyles } from "../constants";

export const DashboardTopBar = () => {
  return (
    <View style={styles.container}>
      <BlueBankSM />
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="#646464" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 18,
    paddingBottom: 16,
  },
  buttonText: {
    ...TextStyles.TextBody["1-sb"],
    color: Colors.primary[50],
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
