import { useNavigation } from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import React from "react";
import { RectButton } from "react-native-gesture-handler";
import { Box, RoundedIcon, Text, useTheme, Theme } from "../../components";
import { HomeRoutes } from "../../components/Navigation";

interface BaseDrawerItem {
  icon: string;
  color: any;
  label: string;
}
interface ScreenDrawerItem extends BaseDrawerItem {
  screen: keyof HomeRoutes;
}
interface OnPressDrawerItem extends BaseDrawerItem {
  onPress: (navigation: ReturnType<typeof useNavigation>) => void;
}
export type DrawerItemProps = ScreenDrawerItem | OnPressDrawerItem;

const DrawerItem = ({ icon, color, label, ...props }: DrawerItemProps) => {
  // @ts-ignore
  const { screen, onPress } = props;

  const theme = useTheme();
  const navigation =
    useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() =>
        screen ? navigation.navigate(screen) : onPress(navigation)
      }
    >
      <Box flexDirection="row" alignItems="center" padding="m">
        <RoundedIcon
          iconRatio={0.5}
          name={icon}
          size={36}
          backgroundColor={color}
          color={"white"}
        />
        <Text variant="button" color="secondary" marginLeft="s">
          {label}
        </Text>
      </Box>
    </RectButton>
  );
};

export default DrawerItem;
