import { useTheme } from "@shopify/restyle";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Text, Theme } from "./Theme";

interface ButtonProps {
  variant: "default" | "primary";
  label?: string;
  onPress: () => void;
}

const Button = ({ variant, label, onPress }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const backgroundColor =
    variant === "primary" ? theme.colors.primary : theme.colors.grey;
  const color =
    variant === "primary" ? theme.colors.white : theme.colors.secondary;
  return (
    <RectButton
      activeOpacity={0}
      style={[styles.container, { backgroundColor }]}
      {...{ onPress }}
    >
      <Text variant="button" style={[{ color }]}>
        {label}
      </Text>
    </RectButton>
  );
};

Button.defaultProps = { variant: "default" };

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
});
