import { Link } from "expo-router";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import Colors from "../../../constants/Colors";
import { Container } from "../../../components/Container";
import { Text, View } from "../../../components/themed";
import { Stepper } from "./components/stepper";
import { TextStyles } from "../../../constants";

export default () => {
  return (
    <Container>
      <Stepper />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Your details</Text>
          <Text style={styles.desc}>Let's start with your details.</Text>
        </View>
      </ScrollView>

      <Link href="/auth/onboarding/stepTwo" asChild>
        <TouchableOpacity
          style={{
            ...styles.button,
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </Link>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: Colors.primary[50],
    borderRadius: 100,
    marginTop: 16,
  },
  topWrapper: {
    gap: 8,
    marginBottom: 24,
  },
  title: {
    ...TextStyles.TextHeading[4],
  },
  desc: {
    ...TextStyles.TextBody[2],
    color: Colors.neutral[50],
  },
  label: {
    ...TextStyles.TextBody["2-sb"],
  },
  buttonText: {
    color: "white",
    lineHeight: 20,
    letterSpacing: -0.5,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Inter-Semibold",
  },
});
