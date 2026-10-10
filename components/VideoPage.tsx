import { Video, videos } from "@/assets/data/videos";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CategoryChips from "./CategoryChips";
import VideoBlock from "./VideoBlock";

type VideoPageProp = {
  video: Video;
};

const VideoPage = ({ video }: VideoPageProp) => {
  const vidId = video.id;
  const otherVids = videos.filter((vid) => vid.id !== vidId);
  return (
    <SafeAreaView edges={["top"]} style={styles.container}>
      <View style={styles.container}>
        <Image source={video.thumbnail} style={styles.thumbnail} />
        <View style={styles.videoDetails}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            @{video.channel} {video.views} {video.time}{" "}
            <Text style={styles.bold}>...more</Text>
          </Text>
          <View style={[styles.row, styles.videoDetails]}>
            <Image source={video.channelIcon} style={styles.channelIcon} />
            <CategoryChips />
          </View>
          <View style={styles.commentBlock}>
            <Text style={styles.bold}>Comments ###</Text>
            <View style={styles.row}>
              <Image
                source={video.channelIcon}
                style={{ height: 30, width: 30, borderRadius: 15, margin: 3 }}
              />
              <Text style={{ padding: 5 }}>First</Text>
            </View>
          </View>
        </View>
        <VideoBlock videos={otherVids} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    height: 300,
    width: "100%",
  },
  videoDetails: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    paddingBottom: 10,
  },
  container: {
    flex: 1,
  },
  bold: {
    fontWeight: "bold",
  },
  channelIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  row: {
    flexDirection: "row",
  },
  commentBlock: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
});
export default VideoPage;
