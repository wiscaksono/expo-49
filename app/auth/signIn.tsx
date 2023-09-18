import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

import { KeyboardAvoidingView } from "../../components/themed";
import { useAuth, User } from "../../context/AuthProvider";
import { TextBody, TextHeading } from "../../constants/TextStyles";
import Colors from "../../constants/Colors";

import { View, Text, TextInput } from "../../components/themed";
import { Container } from "../../components/Container";
import { BlueBankLG } from "../../assets/icons/blue-bank";

export default function SignIn() {
  const [values, setValues] = useState<User>({
    email: "wwicaksono96@gmail.com",
    password: "12345678",
  });

  const { setUser } = useAuth();

  return (
    <Container>
      <View style={styles.title}>
        <BlueBankLG />
      </View>

      <KeyboardAvoidingView style={styles.form}>
        <Text style={TextHeading[2]}>Sign in</Text>
        <TextInput
          label="Customer ID"
          keyboardType="email-address"
          value={values.email}
          onChangeText={(text) => setValues({ ...values, email: text })}
        />
        <View>
          <TextInput
            label="Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={(text) => setValues({ ...values, password: text })}
          />
          <Link href="/auth/signIn" style={styles.forgotPassword}>
            Forgot password?
          </Link>
        </View>
        <Link href="/auth/signIn" asChild>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={() => setUser(values)}
          >
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </Link>
      </KeyboardAvoidingView>

      <Link href="/auth/onboarding/stepOne" asChild>
        <TouchableOpacity style={styles.buttonOutline}>
          <Text style={styles.buttonOutlineText}>Create Account</Text>
        </TouchableOpacity>
      </Link>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 24,
  },
  title: {
    alignItems: "center",
    marginTop: 80,
    marginBottom: 78,
  },
  form: {
    gap: 24,
    flex: 1,
  },
  forgotPassword: {
    marginTop: 8,
    textAlign: "right",
    ...TextBody[2],
    color: Colors.primary[50],
  },
  button: {
    width: "100%",
    paddingVertical: 14,
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
  buttonOutline: {
    width: "100%",
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: Colors.primary[50],
    borderRadius: 100,
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
