import { ActivityIndicator } from "react-native";
import { View } from "./themed";

export const ScreenLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator />
    </View>
  );
};
