import { Link } from "expo-router";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import Colors from "../../../constants/Colors";
import { Stepper } from "./components/stepper";
import { TextStyles } from "../../../constants";
import { Text, View } from "../../../components/themed";
import { Container } from "../../../components/Container";
import { List } from "../../../components/List";

export default () => {
  return (
    <Container>
      <Stepper currentStep={5} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Recommended accounts</Text>
          <Text style={styles.desc}>
            This is based on the information you provided.
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Bundled accounts</Text>
          </View>
          <View style={{ gap: 18 }}>
            <View style={styles.contentWrapper}>
              <Text style={styles.contentTitle}>Bluebank Life</Text>
              <Text style={styles.contentDesc}>
                Bluebank Life could help you reach your savings goals sonner by
                earning bonus interest every month you save.
              </Text>
            </View>
            <View style={styles.listBackdrop}>
              <List>Earn up to 4.50% variable interest</List>
              <List>$0 Account keeping fee</List>
              <List>18+ Minimum age to open account</List>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.contentTitle}>What you get</Text>
              <View>
                <List style={{ color: Colors.neutral[50] }}>
                  Split your savings into up to 6 different savings goals
                </List>
                <List style={{ color: Colors.neutral[50] }}>
                  Boost your savings with bonus interest each month you grow
                  your balance
                </List>
                <List style={{ color: Colors.neutral[50] }}>
                  Unlimited Access via Bluebank Choise account
                </List>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.contentWrapper}>
              <Text style={styles.contentTitle}>Bluebank Choise</Text>
              <Text style={styles.contentDesc}>
                An everyday account with debit card.
              </Text>
            </View>
            <View style={styles.listBackdrop}>
              <List>
                $5 Account keeping fee, unless you’re under 30, a fulltime
                tertiary student or deposit at least $2,000 each month
              </List>
              <List>
                If you are under 14, you can open an account in branch with a
                parent or guardian
              </List>
            </View>
            <View style={styles.contentWrapper}>
              <Text style={styles.contentTitle}>What you get</Text>
              <View>
                <List style={{ color: Colors.neutral[50] }}>
                  Easy access to your money with a Debit Mastercard and a range
                  of digital wallets (including Apple Pay & Google Pay)
                </List>
                <List style={{ color: Colors.neutral[50] }}>
                  Access to exclusive offers and discounts
                </List>
                <List style={{ color: Colors.neutral[50] }}>
                  Fraud Money Back Guarantee
                </List>
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              ...styles.buttonOutline,
            }}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonOutlineText}>Learn more</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Link href="/auth/personalDetail/stepOne" asChild>
        <TouchableOpacity
          style={{
            ...styles.button,
          }}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Open account</Text>
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
    marginBottom: 40,
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
  content: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderColor: Colors.neutral[90],
    borderWidth: 1,
    borderRadius: 4,
    position: "relative",
  },
  badge: {
    position: "absolute",
    backgroundColor: Colors.primary[100],
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    top: -18,
    right: 7,
  },
  badgeText: {
    ...TextStyles.TextBody[2],
    fontWeight: "500",
    color: Colors.primary[50],
  },
  contentWrapper: {
    gap: 4,
  },
  contentTitle: {
    ...TextStyles.TextBody[2],
  },
  contentDesc: { color: Colors.neutral[50], ...TextStyles.TextBody[2] },
  listBackdrop: {
    paddingHorizontal: 8,
    paddingTop: 16,
    paddingBottom: 18,
    backgroundColor: Colors.primary[100],
    borderRadius: 4,
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
  buttonOutline: {
    width: "100%",
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: Colors.primary[50],
    borderRadius: 100,
    marginTop: 28,
  },
  buttonOutlineText: {
    color: Colors.primary[50],
    lineHeight: 20,
    letterSpacing: -0.5,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Inter-Semibold",
  },
});
