import { ScrollView } from "react-native";
import { Text } from "../../../components/themed";
import { Container } from "../../../components/Container";

export default function Home() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          cards cards cards cards cards cards cards cards cards cards cards
          cards cards cards cards cards cards cards cards cards cards
        </Text>
      </ScrollView>
    </Container>
  );
}
