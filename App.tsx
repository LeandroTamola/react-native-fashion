import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { createStackNavigator } from "@react-navigation/stack";

import { LoadAssets } from "./src/components";
import { ThemeProvider } from "./src/components/Theme";

import { HomeNavigator, assets as HomeAssets } from "./src/Home";
import { AppRoutes } from "./src/components/Navigation";

const assets = [...authenticationAssets, ...HomeAssets];

const fonts = {
  "SFProDisplay-Bold": require("./src/assets/fonts/SFProDisplay-Bold.ttf"),
  "SFProDisplay-Medium": require("./src/assets/fonts/SFProDisplay-Medium.ttf"),
  "SFProDisplay-Regular": require("./src/assets/fonts/SFProDisplay-Regular.ttf"),
  "SFProDisplay-Thin": require("./src/assets/fonts/SFProDisplay-Thin.ttf"),
};

const AppStack = createStackNavigator<AppRoutes>();

export default function App() {
  return (
    <ThemeProvider>
      <LoadAssets {...{ fonts, assets }}>
        <SafeAreaProvider>
          <AppStack.Navigator headerMode="none">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
      </LoadAssets>
    </ThemeProvider>
  );
}
