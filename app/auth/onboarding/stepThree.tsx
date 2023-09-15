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
  {
    title: "Savings",
    desc: "Earning interest on my account balance",
  },
  {
    title: "Everyday Transactions",
    desc: "Depositing funds into everyday use with a debit card",
  },
  {
    title: "Everyday transactions and savings",
    desc: "Everyday use with debit card access for earning interest on savings",
  },
];

export default () => {
  const [selected, setSelected] = useState("");

  return (
    <Container>
      <Stepper currentStep={3} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Account type</Text>
          <Text style={styles.desc}>Select the type of account you need.</Text>
        </View>
        <View
          style={{
            gap: 6,
          }}
        >
          <Text style={styles.label}>I need an account for</Text>
          {options.map(({ title, desc }) => (
            <RadioButton
              key={title}
              title={title}
              description={desc}
              isActive={selected === title}
              onPress={() => {
                selected === title ? setSelected("") : setSelected(title);
              }}
            />
          ))}
        </View>
      </ScrollView>

      <Link href="/auth/onboarding/stepFour" asChild>
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
