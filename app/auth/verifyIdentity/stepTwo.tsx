import { Link } from "expo-router";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Stepper } from "./components/stepper";
import { Container } from "../../../components/Container";
import { Text, View, TextInput } from "../../../components/themed";

export default () => {
  return (
    <Container>
      <Stepper currentStep={2} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Verify your identity</Text>
          <Text style={styles.desc}>
            We need two ID documents to verify your identity.
          </Text>

          <View style={styles.form}>
            <TextInput label="Date of birth" />
            <View>
              <TextInput label="Home address" />
              <Text
                style={{
                  ...TextStyles.TextBody[3],
                  color: Colors.neutral["50"],
                  marginTop: 4,
                }}
              >
                e.g. 123 Bluebank St, London, E1 6LT
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <Link href="/auth/verifyIdentity/stepTwo" asChild>
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
  form: {
    marginTop: 24,
    gap: 24,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: Colors.neutral[90],
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
