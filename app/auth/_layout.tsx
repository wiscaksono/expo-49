import { Stack } from "expo-router";

export default () => {
  return (
    <Stack
      initialRouteName="started"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="started" />
      <Stack.Screen name="signIn" />
    </Stack>
  );
};
