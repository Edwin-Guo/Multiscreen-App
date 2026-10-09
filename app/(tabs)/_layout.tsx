import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* <Header /> */}
      <Stack
        screenOptions={
          {
            // header: () => <Header />,
          }
        }
      >
        {/* <Stack.Screen name="index" /> */}
        <Stack.Screen name="subscriptions" />
        <Stack.Screen name="video" options={{ headerShown: false }} />
      </Stack>
      {/* <Navbar /> */}
    </>
  );
}
