import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { View } from "react-native";
import { Header } from "../../components/Header";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          header: () => <Header />,
          tabBarLabelStyle: {
            color: "black",
          },
          sceneStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name={focused ? "home" : "home-outline"} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="subscriptions"
          options={{
            title: "Subscriptions",

            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "albums" : "albums-outline"}
                size={size}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
