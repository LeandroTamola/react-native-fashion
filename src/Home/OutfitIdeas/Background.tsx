import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { Box } from "../../components";
import { palette, useTheme } from "../../components/Theme";

interface BackgroundProps {}

const Background = ({}: BackgroundProps) => {
  const theme = useTheme();
  return (
    <View style={StyleSheet.absoluteFill}>
      <Box flex={1 / 3} style={{ backgroundColor: palette.lightblue }}>
        <Box
          flex={1}
          backgroundColor="background"
          borderBottomRightRadius="xl"
        />
      </Box>
      <Box flex={1 / 3} backgroundColor="secondary" borderTopLeftRadius="xl">
        <Image
          source={require("./assets/pattern1.png")}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
            borderBottomRightRadius: theme.borderRadii.xl,
            borderTopLeftRadius: theme.borderRadii.xl,
          }}
        />
      </Box>
      <Box flex={1 / 3} style={{ backgroundColor: palette.pink }}>
        <Box flex={1} backgroundColor="secondary" borderTopLeftRadius="xl" />
      </Box>
    </View>
  );
};

export default Background;
