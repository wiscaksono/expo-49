import { Link } from "expo-router";
import { useState } from "react";
import { TouchableOpacity, StyleSheet, ScrollView } from "react-native";

import Colors from "../../../constants/Colors";
import { TextStyles } from "../../../constants";
import { TILE_OPTIONS } from "../../../data";

import { Stepper } from "./components/stepper";
import { Select } from "../../../components/Select";
import { Container } from "../../../components/Container";
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from "../../../components/themed";

export type PersonalDetailStepOneParams = {
  tile: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone: string;
};

export default () => {
  const [values, setValues] = useState<PersonalDetailStepOneParams>({
    tile: "Mr",
    firstName: "Wisnu",
    middleName: "",
    lastName: "Wicaksono",
    email: "wwicaksono96@gmail.com",
    phone: "+6287885002327",
  });

  const validate =
    !!values.tile &&
    !!values.firstName &&
    !!values.lastName &&
    !!values.email &&
    !!values.phone;

  return (
    <Container>
      <Stepper />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topWrapper}>
          <Text style={styles.title}>Your details</Text>
          <Text style={styles.desc}>Let's start with your details.</Text>

          <KeyboardAvoidingView style={styles.form}>
            <Select
              label="Tile"
              list={TILE_OPTIONS}
              selected={values.tile}
              onSelect={(value) => setValues({ ...values, tile: value })}
            />
            <View>
              <TextInput
                label="First name"
                value={values.firstName}
                onChangeText={(value) =>
                  setValues({
                    ...values,
                    firstName: value,
                  })
                }
              />
              <Text
                style={{
                  ...TextStyles.TextBody[3],
                  color: Colors.neutral["50"],
                  marginTop: 4,
                }}
              >
                To help us verify your identity online, please enter your name
                exactly as it appears on your ID
              </Text>
            </View>
            <TextInput
              label="Middle name (optional)"
              value={values.middleName}
              onChangeText={(value) =>
                setValues({
                  ...values,
                  middleName: value,
                })
              }
            />
            <TextInput
              label="Last name"
              value={values.lastName}
              onChangeText={(value) =>
                setValues({
                  ...values,
                  lastName: value,
                })
              }
            />

            <View style={styles.divider} />

            <TextInput
              label="Email address"
              keyboardType="email-address"
              value={values.email}
              onChangeText={(value) =>
                setValues({
                  ...values,
                  email: value,
                })
              }
            />
            <TextInput
              label="Mobile number"
              inputMode="tel"
              keyboardType="phone-pad"
              value={values.phone}
              onChangeText={(value) =>
                setValues({
                  ...values,
                  phone: value,
                })
              }
            />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
      <Link
        href={{
          pathname: "/auth/personalDetail/stepTwo",
          params: values,
        }}
        asChild
      >
        <TouchableOpacity
          style={{
            ...styles.button,
            opacity: validate ? 1 : 0.5,
          }}
          disabled={!validate}
          activeOpacity={0.8}
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
