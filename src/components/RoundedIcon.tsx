import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { Box, Theme, Text } from "./Theme";
import { StyleProp, ViewStyle } from "react-native";

export interface RoundedIconProps {
  name: any;
  size: number;
  color: keyof Theme["colors"];
  backgroundColor: keyof Theme["colors"];
  iconRatio: number;
  style?: StyleProp<ViewStyle>;
}

const RoundedIcon = ({
  name,
  size,
  color,
  backgroundColor,
  iconRatio,
  style,
}: RoundedIconProps) => {
  const iconSize = size * iconRatio;
  return (
    <Box
      height={size}
      width={size}
      borderRadius="m"
      justifyContent="center"
      alignItems="center"
      style={[{ borderRadius: size / 2 }, style]}
      {...{ backgroundColor }}
    >
      <Text style={{ width: iconSize, height: iconSize }} {...{ color }}>
        <Icon size={iconSize} {...{ name, color }} />
      </Text>
    </Box>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIcon;
