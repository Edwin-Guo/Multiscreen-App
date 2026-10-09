import { navbarItems } from "@/assets/data/navbarItems";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Navbar() {
  return (
    <SafeAreaView edges={["bottom"]}>
      <View style={styles.row}>
        <FlatList
          data={navbarItems}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <Link href={item.href} asChild>
              <Pressable style={styles.navbarItem}>
                <Ionicons name={item.icon} size={24} color="black" />
                <Text style={styles.navbarText}>{item.label}</Text>
              </Pressable>
            </Link>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "#ffffff",
  },
  navbarText: {
    fontSize: 10,
  },
  navbarItem: {
    alignItems: "center",
    padding: 10,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
});
export default Navbar;
