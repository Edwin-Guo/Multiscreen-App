import { Stack } from "expo-router";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
      <Navbar />
    </>
  );
}
