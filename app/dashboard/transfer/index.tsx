import { ScrollView } from "react-native";
import { Text } from "../../../components/themed";
import { Container } from "../../../components/Container";

export default function Home() {
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text>
          transfer transfer transfer transfer transfer transfer transfer
          transfer transfer transfer transfer transfer transfer transfer
          transfer transfer transfer transfer transfer transfer transfer
          transfer transfer transfer transfer transfer transfer transfer
          transfer transfer transfer transfer transfer transfer transfer
          transfer transfer
        </Text>
      </ScrollView>
    </Container>
  );
}
