import {
  NavigationHelpersContext,
  useNavigation,
} from "@react-navigation/core";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, RoundedIcon, Text, useTheme, Theme } from "../../components";
import { HomeRoutes } from "../../components/Navigation";

interface DrawerlistProps {
  item: DrawerItemProps;
}

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
  screen: keyof HomeRoutes;
}

const DrawerItem = ({
  item: { icon, color, screen, label },
}: DrawerlistProps) => {
  const theme = useTheme();
  const { navigate } =
    useNavigation<DrawerNavigationProp<HomeRoutes, "OutfitIdeas">>();
  return (
    <RectButton
      style={{ borderRadius: theme.borderRadii.m }}
      onPress={() => navigate(screen)}
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

const styles = StyleSheet.create({});
