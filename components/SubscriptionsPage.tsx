import { videos } from "@/assets/data/videos";
import VideoBlock from "./VideoBlock";

export function SubscriptionsPage() {
  return <VideoBlock videos={videos} />;
}

export default SubscriptionsPage;
