import { videos } from "@/assets/data/videos";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function ShortsPage() {
  return (
    <ImageBackground
      source={require("../assets/images/shorts.jpg")}
      style={[styles.shortsSize]}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <SafeAreaView edges={["top"]}>
          <View style={[styles.header, styles.row]}>
            <View></View>
            <View style={[styles.row, { gap: 15 }]}>
              <Ionicons name="search" size={25} color="white" />
              <Ionicons name="ellipsis-vertical" size={25} color="white" />
            </View>
          </View>
        </SafeAreaView>

        <View style={[styles.footer, styles.row]}>
          <View>
            <View style={[styles.videoDetails, { alignItems: "center" }]}>
              <Image
                source={videos[0].channelIcon}
                style={[styles.iconSize, { marginRight: 10 }]}
              />
              <Text style={styles.shortsText}>@{videos[0].channel}</Text>
              <Text style={styles.subscribeChip}>Subscribe</Text>
            </View>
            <View style={[styles.videoDetails]}>
              <Text style={styles.shortsText}>{videos[0].title}</Text>
            </View>
          </View>
          <View style={styles.shortsMenu}>
            <Image
              source={videos[0].channelIcon}
              style={[
                styles.iconSize,
                { borderRadius: 10, borderWidth: 2, borderColor: "#FFF" },
              ]}
            />
            <View style={styles.menuItemBlock}>
              <Ionicons name="refresh" size={25} color="white" />
              <Text style={styles.shortsText}>0</Text>
            </View>
            <View style={styles.menuItemBlock}>
              <Ionicons name="arrow-redo-outline" size={25} color="white" />
              <Text style={styles.shortsText}>Share</Text>
            </View>
            <View style={styles.menuItemBlock}>
              <Ionicons name="bookmark-outline" size={25} color="white" />
              <Text style={styles.shortsText}>Save</Text>
            </View>
            <View style={styles.menuItemBlock}>
              <Ionicons
                name="chatbox-ellipses-outline"
                size={25}
                color="white"
              />
              <Text style={styles.shortsText}>1</Text>
            </View>
            <View style={styles.menuItemBlock}>
              <Ionicons name="thumbs-up-outline" size={25} color="white" />
              <Text style={styles.shortsText}>0</Text>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
{
  /* https://www.reddit.com/r/Persona5/comments/8ifeuq/persona_5_phone_wallpaper_eveningclear/ */
}

const styles = StyleSheet.create({
  shortsSize: {
    width: "100%",
    height: "100%",
  },
  row: {
    flexDirection: "row",
    gap: 4,
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
  },
  footer: {
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  iconSize: {
    height: 40,
    width: 40,
    borderRadius: 25,
  },
  videoDetails: {
    flexDirection: "row",
    paddingBottom: 15,
    marginHorizontal: 10,
  },
  shortsText: {
    fontSize: 13,
    color: "#ffffff",
  },
  subscribeChip: {
    backgroundColor: "#ffffff",
    fontSize: 13,
    borderRadius: 100,
    padding: 10,
    marginHorizontal: 10,
  },
  shortsMenu: {
    flexDirection: "column-reverse",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    gap: 30,
  },
  menuItemBlock: {
    alignItems: "center",
    gap: 5,
  },
});
export default ShortsPage;
