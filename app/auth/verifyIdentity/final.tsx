import { TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import ConfettiCannon from "react-native-confetti-cannon";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Container } from "../../../components/Container";
import { Text, View } from "../../../components/themed";

export default () => {
  return (
    <>
      <Container>
        <View style={styles.topWrapper}>
          <AntDesign
            name="checkcircle"
            size={120}
            color="#55B948"
            style={{ width: 120, height: 120 }}
          />
          <View style={{ gap: 8 }}>
            <Text style={styles.title}>Your account is open!</Text>
            <Text style={styles.desc}>
              You will receive your debit card in the next 7 days.
            </Text>
          </View>
        </View>

        <Link href="/auth/signIn" asChild>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.button,
            }}
          >
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        </Link>
      </Container>
      <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} fadeOut />
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
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  title: {
    ...TextStyles.TextHeading[4],
    textAlign: "center",
  },
  desc: {
    ...TextStyles.TextBody[2],
    color: Colors.neutral[50],
    textAlign: "center",
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
