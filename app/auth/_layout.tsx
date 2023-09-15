import { Stack } from "expo-router";

export default () => {
  return (
    <Stack
      initialRouteName="started"
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};
