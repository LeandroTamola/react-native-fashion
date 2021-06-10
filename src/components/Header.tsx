import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { RoundedIconButton } from ".";
import { Box, Text } from "./Theme";

interface HeaderProps {
  left: {
    icon: string;
    onPress: () => void;
  };
  title: string;
  right: {
    icon: string;
    onPress: () => void;
  };
  dark: boolean;
}

const Header = ({ left, title, right, dark }: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const color = dark ? "white" : "secondary";
  const backgroundColor = dark ? "secondary" : "lightGrey";
  return (
    <Box
      flexDirection="row"
      style={{ marginTop: insets.top, marginBottom: 10 }}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="m"
    >
      <RoundedIconButton
        size={44}
        name={left.icon}
        onPress={left.onPress}
        iconRatio={0.4}
        color={color}
        {...{ backgroundColor }}
      />

      <Text variant="header" {...{ color }}>
        {title.toUpperCase()}
      </Text>

      <RoundedIconButton
        size={44}
        name={right.icon}
        onPress={right.onPress}
        iconRatio={0.4}
        color={color}
        {...{ backgroundColor }}
      />
    </Box>
  );
};

export default Header;

Header.defaultProps = {
  dark: false,
};
