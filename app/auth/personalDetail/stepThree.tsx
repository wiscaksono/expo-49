import { StyleSheet } from "react-native";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Stepper } from "./components/stepper";
import { Container } from "../../../components/Container";
import { Text, View } from "../../../components/themed";

export default () => {
  return (
    <>
      <Container>
        <Stepper />

        <View style={styles.topWrapper}>
          <Text style={styles.title}>Set a password</Text>
          <Text style={styles.desc}>You will need this when logging in.</Text>
        </View>
      </Container>
    </>
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
});
