import { videos } from "@/assets/data/videos";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CategoryChips from "./CategoryChips";
import VideoBlock from "./VideoBlock";

export function SubscriptionsPage() {
  return (
    <View style={styles.container}>
      <View style={styles.channelRow}>
        <FlatList
          data={videos}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          style={styles.channelList}
          renderItem={({ item }) => (
            <View>
              <Image source={item.channelIcon} style={styles.iconSize} />
              <Text style={styles.channelText}>{item.channel}</Text>
            </View>
          )}
        />
        <Pressable>
          <Text style={styles.allText}>All</Text>
        </Pressable>
      </View>
      <CategoryChips />
      <VideoBlock videos={videos} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconSize: {
    height: 65,
    width: 65,
    borderRadius: 45,
    marginRight: 5,
  },
  channelList: {
    flexGrow: 0,
    backgroundColor: "#ffffff",
  },
  channelText: {
    fontSize: 10,
    textAlign: "center",
  },
  container: {
    flex: 1,
  },
  channelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 10,
  },
  allText: {
    color: "#00a9ff",
  },
});

export default SubscriptionsPage;
