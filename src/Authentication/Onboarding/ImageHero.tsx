import React from "react";
import { StyleSheet, ImageRequireSource, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolateNode,
} from "react-native-reanimated";
import { useTheme } from "../../components";

interface ImageProps {
  picture: { src: ImageRequireSource; width: number; height: number };
  width: number;
  index: number;
  x: number;
}

function ImageHero({ picture, width, index, x }: ImageProps) {
  const theme = useTheme();
  console.log(theme);
  const opacity = interpolateNode(x, {
    inputRange: [(index - 0.5) * width, index * width, (index + 0.6) * width],
    outputRange: [0, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.underlay, { opacity }]}>
      <Image
        source={picture.src}
        style={{
          width: width - theme.borderRadii.xl,
          height:
            ((width - theme.borderRadii.xl) * picture.height) / picture.width,
        }}
      />
    </Animated.View>
  );
}
export default ImageHero;

const styles = StyleSheet.create({
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
