import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Box } from "../../components";
import { theme } from "../../components/Theme";

interface BackgroundProps {}

const Background = ({}: BackgroundProps) => {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} backgroundColor="primary">
        <Box flex={1} backgroundColor="white" borderBottomRightRadius="xl" />
      </Box>
      <Box flex={1 / 3} backgroundColor="secondary" borderTopLeftRadius="xl">
        <Image source={require("./assets/pattern1.png")} style={styles.image} />
      </Box>
      <Box flex={1 / 3} backgroundColor="pink">
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: theme.borderRadii.xl,
    borderTopLeftRadius: theme.borderRadii.xl,
  },
});
