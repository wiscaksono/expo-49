import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import Colors from "../../../../constants/Colors";

import { View } from "../../../../components/themed";

export const Stepper = ({ currentStep }: { currentStep: number }) => {
  return (
    <View style={styles.container}>
      <Link href=".." asChild>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Link>
      <View style={styles.steps}>
        {[...Array(2)].map((_, i) => (
          <View
            style={
              i + 1 <= currentStep ? styles.stepActive : styles.stepInactive
            }
            key={i}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 18,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },
  steps: {
    flexDirection: "row",
    gap: 8,
  },
  stepActive: {
    width: 80,
    height: 4,
    borderRadius: 100,
    backgroundColor: Colors.primary[50],
  },
  stepInactive: {
    width: 80,
    height: 4,
    borderRadius: 100,
    backgroundColor: Colors.neutral[90],
  },
});
