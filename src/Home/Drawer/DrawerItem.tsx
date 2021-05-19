import React from "react";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, RoundedIcon, Text, useTheme, Theme } from "../../components";

interface DrawerlistProps {
  item: DrawerItemProps;
}

export interface DrawerItemProps {
  icon: string;
  color: keyof Theme["colors"];
  label: string;
  screen: string;
}

const DrawerItem = ({
  item: { icon, color, screen, label },
}: DrawerlistProps) => {
  const theme = useTheme();
  return (
    <RectButton style={{ borderRadius: theme.borderRadii.m }}>
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
