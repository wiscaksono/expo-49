import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { useSheet } from "../hooks/useSheet";
import { View, Text } from "../components/themed";
import { SheetEmpty } from "./Sheets/SheetEmpty";
import { BlueBankSM } from "../assets/icons/blue-bank";

import Colors from "../constants/Colors";
import { TextStyles } from "../constants";

export const DashboardTopBar = () => {
  const { sheetRef, openSheet } = useSheet();

  return (
    <>
      <View style={styles.container}>
        <BlueBankSM />
        <TouchableOpacity onPress={openSheet}>
          <Ionicons name="notifications-outline" size={24} color="#646464" />
        </TouchableOpacity>
      </View>
      <SheetEmpty ref={sheetRef} snapPoint={["20%"]}>
        <Text
          style={{
            ...TextStyles.TextHeading[3],
            textAlign: "center",
          }}
        >
          You are up to date! 🎉
        </Text>
      </SheetEmpty>
    </>
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
