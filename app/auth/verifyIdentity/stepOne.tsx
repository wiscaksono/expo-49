import { Link } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Stepper } from "./components/stepper";
import { Container } from "../../../components/Container";
import { RadioButton } from "../../../components/RadioButton";
import { DPicker } from "../../../components/DatePicker";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "../../../components/themed";

const options = ["Send to home address", "Add another address"];

type StepOneValues = {
  dob: Date | null;
  address: string;
  debitToSend: string;
};

export default () => {
  const [values, setValues] = useState<StepOneValues>({
    dob: null,
    address: "",
    debitToSend: "",
  });

  return (
    <Container>
      <Stepper currentStep={1} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Verify your identity</Text>
          <Text style={styles.desc}>
            Please enter your personal details below
          </Text>

          <KeyboardAvoidingView style={styles.form}>
            <DPicker
              label="Date of birth"
              date={values.dob}
              onChange={(val) => setValues({ ...values, dob: val })}
            />
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

            <View style={{ gap: 6 }}>
              <Text style={styles.label}>
                Where would you like your Debit card to be sent?
              </Text>
              <View style={{ gap: 8 }}>
                {options.map((option) => (
                  <RadioButton
                    key={option}
                    title={option}
                    isActive={values.debitToSend === option}
                    onPress={() => {
                      values.debitToSend === option
                        ? setValues({ ...values, debitToSend: "" })
                        : setValues({ ...values, debitToSend: option });
                    }}
                  />
                ))}
              </View>
            </View>
          </KeyboardAvoidingView>
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
