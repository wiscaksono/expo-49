import { ScrollView } from "react-native";
import { Text } from "../../../components/themed";
import { Container } from "../../../components/Container";

export default function Home() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          profile profile profile profile profile profile profile profile
          profile profile profile profile profile profile profile profile
          profile profile profile profile profile
        </Text>
      </ScrollView>
    </Container>
  );
}
