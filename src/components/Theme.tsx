import React from "react";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  ThemeProvider as ReStyleThemeProvider,
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";
import { ReactNode } from "react";

export const palette = {
  white: "white",
  green: "#2CB9B0",
  orange: "#FE5E33",
  yellow: "#FFC641",
  pink: "#FF87A2",
  violet: "#442CB9",
  customViolet: "#160029",
  customViolet2: "#120934",
  lightblue: "#BFEAF5",
  transparent: "transparent",
};

const theme = {
  colors: {
    primary: palette.green,
    primaryLight: "#E7F9F7",
    secondary: "#0C0D34",
    danger: "#FF0058",
    info: "#808080",
    text: "rgba(12, 13, 52, 0.7)",
    background: palette.white,
    background2: "#F4F0EF",

    graph1: palette.orange,
    warning: palette.yellow,
    drawer1: palette.green,
    drawer2: palette.orange,
    drawer3: palette.yellow,
    drawer4: palette.pink,
    drawer5: palette.violet,
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
      color: "background",
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
      color: "text",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProDisplay-Regular",
      color: "text",
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
export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ReStyleThemeProvider theme={theme}>{children}</ReStyleThemeProvider>
);

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles =
  <T extends NamedStyles<T>>(styles: (theme: Theme) => T) =>
  () => {
    const currentTheme = useTheme();
    return styles(currentTheme);
  };
