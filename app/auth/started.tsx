import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";

import { Text, View } from "../../components/themed";
import { Container } from "../../components/Container";
import { BlueBankSM } from "../../assets/icons/blue-bank";
import { TextBody, TextHeading } from "../../constants/TextStyles";
import Colors from "../../constants/Colors";

export default () => {
  return (
    <Container>
      <View style={styles.topContainer}>
        <BlueBankSM />
        <Link href="/auth/signIn" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Sign in</Text>
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.content}>
        <Image source={require("../../assets/images/getting-started.png")} />
        <View style={styles.textWrapper}>
          <Text style={TextHeading[1]}>Get $50 when you open an account</Text>
          <Text style={styles.description}>
            Enjoy the benefits of online banking by becoming a customer. Let’s
            help you find the right account.
          </Text>
        </View>
      </View>

      <Link href="/auth/onboarding/stepOne" asChild>
        <TouchableOpacity style={styles.button} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Link>
    </Container>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 18,
    marginBottom: 50,
  },
  link: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: Colors.primary[50],
    fontWeight: "600",
  },
  content: {
    flex: 1,
    gap: 40,
  },
  textWrapper: {
    gap: 10,
  },
  description: {
    ...TextBody[2],
    color: Colors.neutral[50],
  },
  button: {
    width: "100%",
    paddingVertical: 20,
    backgroundColor: Colors.primary[50],
    borderRadius: 100,
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
