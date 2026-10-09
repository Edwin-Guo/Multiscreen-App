import Ionicons from "@expo/vector-icons/Ionicons";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { Video } from "../assets/data/videos";

type VideoBlockProps = {
  videos: Video[];
};

export function VideoBlock({ videos }: VideoBlockProps) {
  return (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Image source={item.thumbnail} style={styles.thumbnail} />
          <View style={styles.videoDetails}>
            <View>
              <Image source={item.channelIcon} style={styles.channelIcon} />
            </View>
            <View style={[styles.verticalCenter, { flex: 2 }]}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={[styles.subtitle, styles.verticalCenter]}>
                {item.channel} &middot; {item.views} &middot; {item.time}
              </Text>
            </View>
            <View style={styles.verticalCenter}>
              <Ionicons name="ellipsis-vertical" size={20} color="black" />
            </View>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  videoDetails: {
    marginHorizontal: 10,
    padding: 5,
    flexDirection: "row",
  },
  backgroundColor: {
    backgroundColor: "#ffffff",
  },
  thumbnail: {
    height: 300,
    width: "100%",
  },
  channelIcon: {
    margin: 10,
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 13,
    color: "#b9b9b9",
  },
  verticalCenter: {
    justifyContent: "center",
  },
});

export default VideoBlock;
