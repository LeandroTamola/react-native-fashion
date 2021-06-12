import { CommonActions } from "@react-navigation/routers";
import { DrawerItemProps } from "./DrawerItem";

export const items: DrawerItemProps[] = [
  {
    icon: "zap",
    label: "Ourfit Ideas",
    screen: "OutfitIdeas",
    color: "drawer1",
  },
  {
    icon: "heart",
    label: "Favorites Outfits",
    screen: "FavoriteOutfits",
    color: "drawer2",
  },
  {
    icon: "user",
    label: "Edit Profile",
    screen: "EditProfile",
    color: "drawer3",
  },
  {
    icon: "clock",
    label: "Transaction History",
    screen: "TransactionHistory",
    color: "drawer4",
  },
  {
    icon: "settings",
    label: "Notifications Settings",
    screen: "NotificationsSettings",
    color: "drawer5",
  },
  {
    icon: "log-out",
    label: "Log Out",
    onPress: (navigation) =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Authentication" }],
        })
      ),
    color: "secondary",
  },
];
