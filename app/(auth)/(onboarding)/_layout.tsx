import { Slot } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

import { View } from "../../../components/Themed";
import { Container } from "../../../components/Container";

export default function AuthLayout() {
  return (
    <Container>
      <Stepper />
      <Slot />
    </Container>
  );
}

const Stepper = () => {
  return (
    <View
      style={{
        paddingVertical: 18,
      }}
    >
      <Link href="..">
        <AntDesign name="arrowleft" size={24} color="black" />
      </Link>
    </View>
  );
};
