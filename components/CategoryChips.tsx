import { FlatList, StyleSheet, Text, View } from "react-native";
import { categories } from "../assets/data/categories";
export function CategoryChips() {
  return (
    <View style={styles.backgroundColor}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        style={styles.row}
        renderItem={({ item }) => <Text style={styles.chip}>{item.label}</Text>}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  row: {
    marginHorizontal: 10,
    paddingBottom: 10,
  },
  backgroundColor: {
    backgroundColor: "#ffffff",
  },
  chip: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    fontSize: 15,
    padding: 6,
    marginRight: 10,
  },
});

export default CategoryChips;
