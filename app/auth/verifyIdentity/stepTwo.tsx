import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Stepper } from "./components/stepper";
import { Select } from "../../../components/Select";
import { Container } from "../../../components/Container";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "../../../components/themed";
import { ScreenLoader } from "../../../components/ScreenLoader";

const fields = [
  {
    title: "Driver Lisence",
    fields: ["License number", "State", "Expiry date"],
  },
  {
    title: "Passport",
    fields: ["Passport number", "Country", "Expiry date"],
  },
  {
    title: "Medicare Card",
    fields: ["Medicare number", "Expiry date"],
  },
  {
    title: "Photo ID",
    fields: ["ID number", "Expiry date"],
  },
];

export default () => {
  const [isComplete, setIsComplete] = useState(false);
  const [values, setValues] = useState({
    verificationMethod: "",
    secondVerificationMethod: "",
  });

  const { push } = useRouter();

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        push("/auth/verifyIdentity/final");
      }, 1000);
    }
  }, [isComplete]);

  if (isComplete) {
    return <ScreenLoader />;
  }

  return (
    <Container>
      <Stepper currentStep={2} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Verify your identity</Text>
          <Text style={styles.desc}>
            We need two ID documents to verify your identity
          </Text>

          <KeyboardAvoidingView style={styles.form}>
            <View style={{ gap: 24 }}>
              <Select
                label="Select verification method"
                selected={values.verificationMethod}
                list={fields.map((item) => item.title)}
                onSelect={(value) =>
                  setValues({ ...values, verificationMethod: value })
                }
              />

              {values.verificationMethod &&
                fields
                  .find((item) => item.title === values.verificationMethod)
                  ?.fields.map((field, i) => (
                    <TextInput key={i} label={field} />
                  ))}
            </View>

            <View style={styles.divider} />

            <View style={{ gap: 24 }}>
              <Select
                disabled={!values.verificationMethod}
                label="Select second verification method"
                selected={values.secondVerificationMethod}
                list={fields
                  .map((item) => item.title)
                  .filter((item) => item !== values.verificationMethod)}
                onSelect={(value) =>
                  setValues({ ...values, secondVerificationMethod: value })
                }
              />

              {values.secondVerificationMethod &&
                fields
                  .find(
                    (item) => item.title === values.secondVerificationMethod,
                  )
                  ?.fields.map((field, i) => (
                    <TextInput key={i} label={field} />
                  ))}
            </View>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setIsComplete(true)}
        style={{
          ...styles.button,
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
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
