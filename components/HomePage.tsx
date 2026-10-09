import { View } from "react-native";
import { videos } from "../assets/data/videos";
import { VideoBlock } from "../components/VideoBlock";
import CategoryChips from "./CategoryChips";

export function HomePage() {
  return (
    <View>
      <CategoryChips />
      <VideoBlock videos={videos} />
    </View>
  );
}
// const styles = StyleSheet.create({
//   row: {
//     flexDirection: "row",
//     paddingHorizontal: 10,
//     gap: 4,
//   },
//   header: {
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 10,
//     padding: 5,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   backgroundColor: {
//     backgroundColor: "#ffffff",
//   },
// });

export default HomePage;
