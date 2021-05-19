import { DrawerItemProps } from "./DrawerItem";

export const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Ourfit Ideas",
    screen: "OutfitIdeas",
    color: "primary",
  },
  {
    icon: "heart",
    label: "Favorites Outfits",
    screen: "FavoritesOutfits",
    color: "orange",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EfitProfile",
    color: "yellow",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "primary",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "NotificationsSettings",
    color: "violet",
  },
  {
    icon: "log-out",
    label: "Log Out",
    screen: "LogOut",
    color: "secondary",
  },
];
