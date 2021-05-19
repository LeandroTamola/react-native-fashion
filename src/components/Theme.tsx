import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12,13,52,0.7)",
    body: "rgba(12,13,52,0.7)",
    white: "white",
    grey: "#F4F0EF",
    lightGrey: "#FAFAFA",
    primaryLight: "#E7F9F7",
    orange: "#FE5E33",
    yellow: "#FFC641",
    pink: "#FF87A2",
    violet: "#442CB9",
    lightBlue: "#BFEAF5",
  },
  spacing: { s: 8, m: 16, l: 24, xl: 40 },
  borderRadii: {
    n: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 70,
      lineHeight: 80,
      fontFamily: "SFProDisplay-Bold",
      textAlign: "center",
      color: "white",
    },
    title: {
      fontSize: 28,
      fontFamily: "SFProDisplay-Medium",
      color: "secondary",
    },
    title1: {
      fontSize: 24,
      lineheight: 30,
      fontFamily: "SFProDisplay-Medium",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineheight: 30,
      fontFamily: "SFProDisplay-Medium",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineheight: 24,
      fontFamily: "SFProDisplay-Regular",
      color: "body",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Regular",
      color: "body",
    },
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProDisplay-Bold",
      color: "secondary",
    },
  },
  breakpoints: { phone: 0, tablet: 768 },
};
export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();
// export default theme;
type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
