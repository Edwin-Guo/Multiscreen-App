import { ImageSourcePropType } from "react-native";
export type Video = {
  id: number;
  title: string;
  thumbnail: ImageSourcePropType;
  channelIcon: ImageSourcePropType;
  channel: string;
  views: string;
  time: string;
};

export const videos: Video[] = [
  {
    id: 1,
    title: "Video 1",
    thumbnail: require("../images/thumbnail.jpg"),
    channelIcon: require("../images/chanels.jpg"),
    channel: "Channel 1",
    views: "100k",
    time: "1 day ago",
  },
  {
    id: 2,
    title: "Video 2",
    thumbnail: require("../images/sky-thumb.jpg"),
    channelIcon: require("../images/profile-picture.png"),
    channel: "Channel 2",
    views: "200k",
    time: "2 day ago",
  },
  {
    id: 3,
    title: "Video 3",
    thumbnail: require("../images/sky-thumb.jpg"),
    channelIcon: require("../images/profile-picture.png"),
    channel: "Channel 3",
    views: "300k",
    time: "3 day ago",
  },
  {
    id: 4,
    title: "Video 4",
    thumbnail: require("../images/sky-thumb.jpg"),
    channelIcon: require("../images/profile-picture.png"),
    channel: "Channel 4",
    views: "400k",
    time: "4 day ago",
  },
  {
    id: 5,
    title: "Video 5",
    thumbnail: require("../images/sky-thumb.jpg"),
    channelIcon: require("../images/profile-picture.png"),
    channel: "Channel 5",
    views: "500k",
    time: "5 day ago",
  },
  // https://dictionary.cambridge.org/dictionary/english/thumbnail
  // https://www.youtube.com/user/CHANEL

  //https://www.magnific.com/free-ai-image/dreamy-cloudscape-pastel-colors_417486156.htm#fromView=keyword&page=1&position=0&uuid=99bfe73d-50e3-4f0b-a6aa-79f689b4d6d9&track=ais_hybrid&query=Desktop+wallpaper+sky
  //https://pixabay.com/illustrations/icon-profile-user-clip-art-7797704/
];
