import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

import { View, Text } from "../../../components/themed";
import { Container } from "../../../components/Container";
import { DashboardDetailTopBar } from "../../../components/DashboardDetailTopBar";

export default () => {
  const { type } = useLocalSearchParams();

  return (
    <Container>
      <DashboardDetailTopBar title={`Bluebank ${type}`} />
      <ScrollView>
        <Text>{type}</Text>
      </ScrollView>
    </Container>
  );
};
