import Ionicons from "@expo/vector-icons/Ionicons";
import { Href } from "expo-router";
export type NavbarItems = {
  id: number;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  href: Href;
};

export const navbarItems: NavbarItems[] = [
  { id: 1, icon: "home-outline", label: "Home", href: "/" },
  { id: 2, icon: "film-outline", label: "Shorts", href: "/" },
  { id: 3, icon: "add", label: "", href: "/" },
  {
    id: 4,
    icon: "albums-outline",
    label: "Subscriptions",
    href: "/subscriptions",
  },
  { id: 5, icon: "person-circle-outline", label: "You", href: "/" },
];
