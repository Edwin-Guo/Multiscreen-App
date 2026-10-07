import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export function Header() {
  return (
    <SafeAreaView>
      <View style={[styles.row, styles.backgroundColor]}>
        <View style={styles.row}>
          <Ionicons name="logo-youtube" size={30} color="red" />
          <Text style={styles.title}>Youtube</Text>
        </View>

        <View style={[styles.row, { gap: 10 }]}>
          <Ionicons name="notifications-outline" size={25} color="black" />
          <Ionicons name="search" size={25} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    padding: 3,
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
