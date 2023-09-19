import { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";

import { Stepper } from "./components/stepper";
import { Container } from "../../../components/Container";
import { Text, View, TextInput } from "../../../components/themed";

export default () => {
  const [values, setValues] = useState("");

  const validate =
    values.length >= 8 &&
    !values.includes(" ") &&
    /[!@#$&()\\-`.+,/"0-9]/.test(values);

  return (
    <Container>
      <Stepper />

      <View style={styles.topWrapper}>
        <Text style={styles.title}>Set a password</Text>
        <Text style={styles.desc}>You will need this when logging in.</Text>

        <View style={{ marginTop: 24 }}>
          <TextInput
            label="Password"
            secureTextEntry
            value={values}
            onChangeText={setValues}
          />
          <View style={{ marginTop: 8, gap: 8 }}>
            <Text
              style={{
                ...TextStyles.TextBody["3-sb"],
              }}
            >
              Password strength: Strong
            </Text>
            <View style={{ gap: 8 }}>
              <Requirement
                text="Must be at least 8 characters"
                isValid={values.length >= 8}
              />

              <Requirement
                text="Can’t include your name or email address"
                isValid={true}
              />

              <Requirement
                text="Must have at least one symbol or number"
                isValid={/[!@#$&()\\-`.+,/"0-9]/.test(values)}
              />

              <Requirement
                text="Can't contain spaces"
                isValid={!values.includes(" ")}
              />
            </View>
          </View>
        </View>
      </View>
      <Link href="/auth/verifyIdentity/stepOne" asChild>
        <TouchableOpacity
          style={{
            ...styles.button,
            opacity: validate ? 1 : 0.5,
          }}
          activeOpacity={0.8}
          disabled={!validate}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </Link>
    </Container>
  );
};

const Requirement = ({
  text,
  isValid = false,
}: {
  text: string;
  isValid: boolean;
}) => {
  return (
    <View style={{ flexDirection: "row", gap: 8 }}>
      {isValid ? (
        <AntDesign name="check" size={16} color="#55B948" />
      ) : (
        <AntDesign name="close" size={16} color="#FF0000" />
      )}
      <Text
        style={{
          ...TextStyles.TextBody[3],
          color: isValid ? "black" : "#FF0000",
          fontWeight: isValid ? "400" : "500",
        }}
      >
        {text}
      </Text>
    </View>
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
  buttonText: {
    color: "white",
    lineHeight: 20,
    letterSpacing: -0.5,
    textAlign: "center",
    fontWeight: "600",
    fontFamily: "Inter-Semibold",
  },
  topWrapper: {
    gap: 8,
    marginBottom: 24,
    flex: 1,
  },
  title: {
    ...TextStyles.TextHeading[4],
  },
  desc: {
    ...TextStyles.TextBody[2],
    color: Colors.neutral[50],
  },
});
