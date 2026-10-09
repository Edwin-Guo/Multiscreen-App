import { videos } from "@/assets/data/videos";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import VideoPage from "../../components/VideoPage";

export function VideoRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const video = videos.find((vid) => vid.id === Number(id));

  if (!video) return <Text>Video not found</Text>;

  return <VideoPage video={video} />;
}

export default VideoRoute;
