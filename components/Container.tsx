import { View } from "./Themed";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

type ContainerProps = {
  children: React.ReactNode;
  headerComponent?: React.ReactNode;
  footerComponent?: React.ReactNode;
};

export function Container({
  children,
  headerComponent,
  footerComponent,
}: ContainerProps) {
  return (
    <View style={styles.container}>
      {headerComponent}
      <SafeAreaView style={styles.safeArea}>
        <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
      </SafeAreaView>
      {footerComponent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 24,
  },
});
