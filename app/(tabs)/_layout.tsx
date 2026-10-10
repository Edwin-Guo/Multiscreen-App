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
          name="shorts"
          options={{
            title: "Shorts",
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
              <Ionicons name={focused ? "film" : "film-outline"} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="upload"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "add-circle" : "add-circle-outline"}
                size={size}
              />
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
        <Tabs.Screen
          name="profile"
          options={{
            title: "You",
            tabBarIcon: ({ focused, size }) => (
              <Ionicons
                name={focused ? "person-circle" : "person-circle-outline"}
                size={size}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
