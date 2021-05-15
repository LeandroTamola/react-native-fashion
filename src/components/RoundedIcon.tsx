import React from "react";
import { StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme, Text } from "./Theme";

export interface RoundedIconProps {
  name: any;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
}: RoundedIconProps) => {
  const iconSize = size * 0.8;
  return (
    <Box
      height={size}
      width={size}
      justifyContent="center"
      alignItems="center"
      style={{ borderRadius: size / 2 }}
      {...{ backgroundColor }}
    >
      <Text {...{ color }} style={{ width: iconSize, height: iconSize }}>
        <Icon
          {...{ name, color }}
          size={iconSize}
          style={{ textAlign: "center" }}
        />
      </Text>
    </Box>
  );
};

export default RoundedIcon;
