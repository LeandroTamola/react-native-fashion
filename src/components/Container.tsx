import React, { ReactNode } from "react";
import { Dimensions, StyleSheet, Image, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Box } from "./Theme";
import Constants from "expo-constants";

interface ContainerProps {
  children: ReactNode;
  footer: ReactNode;
  pattern: 0 | 1 | 2;
}
const { width, height: dHeight } = Dimensions.get("window");
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

export const assets = [
  require("../assets/patterns/pattern1.png"),
  require("../assets/patterns/pattern2.png"),
  require("../assets/patterns/pattern3.png"),
];

const Container = ({ children, footer, pattern }: ContainerProps) => {
  const insets = useSafeAreaInsets();
  const asset = assets[pattern];

  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <Box
        height={
          dHeight + (Platform.OS === "android" ? Constants.statusBarHeight : 0)
        }
        backgroundColor="secondary"
      >
        <Box backgroundColor="white">
          <Box
            borderBottomLeftRadius="xl"
            overflow="hidden"
            height={height * 0.61}
          >
            <Image source={asset} style={{ width, height }} />
          </Box>
        </Box>
        <Box flex={1} overflow="hidden">
          <Image
            source={asset}
            style={{
              ...StyleSheet.absoluteFillObject,
              width,
              height,
              top: -height * 0.61,
            }}
          />
          <Box
            borderRadius="xl"
            borderTopLeftRadius="n"
            backgroundColor="white"
            flex={1}
            justifyContent="center"
          >
            {children}
          </Box>
        </Box>
        <Box backgroundColor="secondary">
          {footer}
          <Box height={insets.bottom} />
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
};

export default Container;
