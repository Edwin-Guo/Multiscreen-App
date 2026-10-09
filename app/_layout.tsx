import { Stack } from "expo-router";
import { View } from "react-native";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
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
        <Stack.Screen name="video/[id]" options={{ headerShown: false }} />
      </Stack>
      <Navbar />
    </View>
  );
}
