import { Link } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Stepper } from "./components/stepper";
import { Select } from "../../../components/Select";
import { Container } from "../../../components/Container";
import { Text, View } from "../../../components/themed";

const verificationMethod = [
  "Driver Lisence",
  "Passport",
  "Medicare Card",
  "Photo ID ",
];

export default () => {
  const [values, setValues] = useState({
    verificationMethod: "",
    secondVerificationMethod: "",
  });

  return (
    <Container>
      <Stepper currentStep={2} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Verify your identity</Text>
          <Text style={styles.desc}>
            We need two ID documents to verify your identity
          </Text>

          <View style={styles.form}>
            <Select
              label="Select verification method"
              selected={values.verificationMethod}
              list={verificationMethod}
              onSelect={(value) =>
                setValues({ ...values, verificationMethod: value })
              }
            />

            <View style={styles.divider} />

            <Select
              label="Select second verification method"
              selected={values.verificationMethod}
              list={verificationMethod}
              onSelect={(value) =>
                setValues({ ...values, secondVerificationMethod: value })
              }
            />
          </View>
        </View>
      </ScrollView>
      <Link href="/auth/verifyIdentity/stepTwo" asChild>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            ...styles.button,
          }}
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
    gap: 48,
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
