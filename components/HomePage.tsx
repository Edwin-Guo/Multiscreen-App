import { View } from "react-native";
import { videos } from "../assets/data/videos";
import { VideoBlock } from "../components/VideoBlock";
import CategoryChips from "./CategoryChips";

export function HomePage() {
  return (
    <View style={{ flex: 1 }}>
      <CategoryChips />
      <VideoBlock videos={videos} />
    </View>
  );
}

export default HomePage;
