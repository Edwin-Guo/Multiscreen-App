import { FlatList, StyleSheet, Text } from "react-native";
import { categories } from "../assets/data/categories";
export function CategoryChips() {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      style={styles.row}
      renderItem={({ item }) => <Text style={styles.chip}>{item.label}</Text>}
    />
  );
}
const styles = StyleSheet.create({
  row: {
    marginHorizontal: 10,
    padding: 5,
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
