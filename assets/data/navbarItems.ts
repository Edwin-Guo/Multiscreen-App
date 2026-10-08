import Ionicons from "@expo/vector-icons/Ionicons";
export type NavbarItems = {
  id: number;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
};

export const navbarItems: NavbarItems[] = [
  { id: 1, icon: "home-outline", label: "Home" },
  { id: 2, icon: "film-outline", label: "Shorts" },
  { id: 3, icon: "add", label: "" },
  { id: 4, icon: "albums-outline", label: "Subscriptions" },
  { id: 5, icon: "person-circle-outline", label: "You" },
];
