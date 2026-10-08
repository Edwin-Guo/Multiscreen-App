import { navbarItems } from "@/assets/data/navbarItems";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function Navbar() {
  return (
    <SafeAreaView>
      <View style={styles.row}>
        <FlatList
          data={navbarItems}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <View style={styles.navbarItem}>
              <Ionicons name={item.icon} size={24} color="black" />
              <Text style={styles.navbarText}>{item.label}</Text>
            </View>
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
