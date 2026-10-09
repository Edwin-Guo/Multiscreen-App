import { Stack } from "expo-router";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      {/* <Header /> */}
      <Stack
        screenOptions={{
          header: () => <Header />,
          contentStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="subscriptions" />
        <Stack.Screen name="video" options={{ headerShown: false }} />
      </Stack>
      <Navbar />
    </>
  );
}
