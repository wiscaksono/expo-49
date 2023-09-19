import { ScrollView } from "react-native";

import { Container } from "../../../components/Container";
import { DashboardTopBar } from "../../../components/DashboardTopBar";
import { TopCategories } from "./components/TopCategories";
import { Accounts } from "./components/Accounts";

export default function Home() {
  return (
    <Container>
      <DashboardTopBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Accounts />
        <TopCategories />
      </ScrollView>
    </Container>
  );
}
