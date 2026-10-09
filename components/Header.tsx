import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CategoryChips } from "./CategoryChips";
export function Header() {
  return (
    <SafeAreaView edges={["top"]}>
      <View style={[styles.row, styles.backgroundColor, styles.header]}>
        <View style={styles.row}>
          <Ionicons name="logo-youtube" size={30} color="red" />
          <Text style={styles.title}>Youtube</Text>
        </View>

        <View style={[styles.row, { gap: 10 }]}>
          <Ionicons name="notifications-outline" size={25} color="black" />
          <Ionicons name="search" size={25} color="black" />
        </View>
      </View>
      <CategoryChips />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 4,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  backgroundColor: {
    backgroundColor: "#ffffff",
  },
});

export default Header;
