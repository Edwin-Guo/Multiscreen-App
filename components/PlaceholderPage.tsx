import { StyleSheet, Text, View } from "react-native";

export function PlaceholderPage() {
  return (
    <View style={styles.centerText}>
      <Text>Sorry but this page is unavailable</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default PlaceholderPage;
