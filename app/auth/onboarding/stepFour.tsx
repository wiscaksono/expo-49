import { Link } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import Colors from "../../../constants/Colors";
import { Container } from "../../../components/Container";
import { Text, View } from "../../../components/themed";
import { Stepper } from "./components/stepper";
import { RadioButton } from "../../../components/RadioButton";
import { TextStyles } from "../../../constants";

const options = [
  "A short term or regular savings account",
  "Something fixed with a guaranteed rate of retutrn without access to my funds",
];

export default () => {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <Stepper currentStep={4} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Savings type</Text>
          <Text style={styles.desc}>Select a savings account</Text>
        </View>
        <View
          style={{
            gap: 6,
          }}
        >
          <Text style={styles.label}>Select age</Text>
          {options.map((option) => (
            <RadioButton
              key={option}
              title={option}
              isActive={selected === option}
              onPress={() => {
                selected === option ? setSelected("") : setSelected(option);
              }}
            />
          ))}
        </View>
      </ScrollView>

      <Link href="/auth/onboarding/stepFive" asChild>
        <TouchableOpacity
          style={{
            ...styles.button,
            opacity: selected ? 1 : 0.5,
          }}
          activeOpacity={0.8}
          disabled={!selected}
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
