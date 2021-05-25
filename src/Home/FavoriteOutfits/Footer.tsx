import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Box, Button } from "../../components";

interface FooterProps {
  label: string;
  onPress: () => void;
}

const { height } = Dimensions.get("window");

const Footer = ({ label, onPress }: FooterProps) => {
  return (
    <Box
      style={styles.container}
      flex={1}
      position="absolute"
      bottom={0}
      right={0}
      left={0}
      height={height / 6}
      backgroundColor="secondary"
      borderTopLeftRadius="xl"
    >
      <Button variant="primary" label={label} onPress={onPress} />
    </Box>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
