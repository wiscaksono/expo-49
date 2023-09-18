import { StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Stepper } from "./components/stepper";
import { Container } from "../../../components/Container";
import { Text, View, TextInput } from "../../../components/themed";
import { PersonalDetailStepOneParams } from "./stepOne";

export default () => {
  const { phone } = useLocalSearchParams<PersonalDetailStepOneParams>();

  return (
    <Container>
      <Stepper />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>
            Enter the 4-digit code sent to you at
          </Text>
          <Text style={styles.desc}>{phone}</Text>
        </View>

        <TextInput label="aaa" value="" />
      </ScrollView>
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
