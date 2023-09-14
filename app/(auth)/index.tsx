import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function Auth() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos assumenda
        architecto dolores cum! Voluptatibus soluta iure tempora blanditiis
        optio! Obcaecati recusandae molestiae officia velit accusamus ea odio
        esse dolorem praesentium.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
