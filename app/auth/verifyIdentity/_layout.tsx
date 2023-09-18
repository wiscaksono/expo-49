import { Stack } from "expo-router";

export default () => {
  return (
    <Stack
      initialRouteName="stepOne"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};
