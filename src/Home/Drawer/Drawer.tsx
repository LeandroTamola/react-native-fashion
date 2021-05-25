import React from "react";
import { StyleSheet, Dimensions, Image } from "react-native";
import { Box, Header, Text } from "../../components";
import DrawerItem from "./DrawerItem";
import { items } from "./drawerData";
import { DrawerActions } from "@react-navigation/routers";
import { RectButton } from "react-native-gesture-handler";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { HomeRoutes } from "../../components/Navigation";

export const assets = [require("./assets/drawer.png")];
export const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.8;
const aspectRatio = 900 / 1200;
const height = DRAWER_WIDTH * aspectRatio;
const avatar = {
  uri: "https://yt3.ggpht.com/ytc/AAUvwnj-xN9rqlHONzSmWFeyne4hPki64vofGVOJlD0bxw=s900-c-k-c0x00ffffff-no-rj",
};

const Drawer = ({ navigation }) => {
  return (
    <Box flex={1}>
      <Box flex={0.2} backgroundColor="white">
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          borderBottomRightRadius="xl"
          backgroundColor="secondary"
        >
          <Header
            title="My profile"
            left={{
              icon: "x",
              onPress: () => navigation.dispatch(DrawerActions.closeDrawer()),
            }}
            right={{ icon: "shopping-bag", onPress: () => true }}
            dark
          />
        </Box>
      </Box>
      <Box flex={0.8}>
        <Box flex={1} backgroundColor="secondary" />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          backgroundColor="white"
          borderTopLeftRadius="xl"
          borderBottomRightRadius="xl"
          justifyContent="center"
          padding="l"
        >
          <Box
            position="absolute"
            left={DRAWER_WIDTH / 2 - 50}
            top={-50}
            alignSelf="center"
            backgroundColor="primary"
            width={100}
            height={100}
            style={{ borderRadius: 50 }}
            overflow="hidden"
          >
            <Image
              source={avatar}
              style={{ width: 100, height: 100 }}
              width={100}
              height={100}
            />
          </Box>
          <Box marginVertical="m">
            <Text variant="title1" textAlign="center">
              Anto Jotayan
            </Text>

            <Text variant="body" textAlign="center">
              antojotayan@gmail.com
            </Text>
          </Box>
          {items.map((item, index) => (
            <DrawerItem key={index} {...{ item }} />
          ))}
        </Box>
      </Box>
      <Box
        flex={0.2}
        width={DRAWER_WIDTH}
        height={height * 0.61}
        backgroundColor="white"
        borderTopLeftRadius="xl"
        overflow="hidden"
      >
        <Image
          source={assets[0]}
          style={{
            ...StyleSheet.absoluteFillObject,
            width: DRAWER_WIDTH,
            height: undefined,
          }}
        />
      </Box>
    </Box>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
