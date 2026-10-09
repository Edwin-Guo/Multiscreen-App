import { ImageSourcePropType } from "react-native";

export type Channel = {
  id: number;
  channelIcon: ImageSourcePropType;
};

export const channels: Channel[] = [
  {
    id: 1,
    channelIcon: require("../images/chanels.jpg"),
  },
  {
    id: 2,
    channelIcon: require("../images/profile-picture.png"),
  },
  {
    id: 3,
    channelIcon: require("../images/profile-picture.png"),
  },
  {
    id: 4,
    channelIcon: require("../images/profile-picture.png"),
  },
  {
    id: 5,
    channelIcon: require("../images/profile-picture.png"),
  },
];
