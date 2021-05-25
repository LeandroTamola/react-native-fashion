import React, { useState, useRef } from "react";
import { StyleSheet, ScrollView, Dimensions } from "react-native";

import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { theme, useTheme } from "../../components/Theme";
import { outfitsData } from "./outfitsData";
import Outfit from "./Outfit";
import Footer from "./Footer";
import {
  TransitioningView,
  Transition,
  Transitioning,
} from "react-native-reanimated";

const { width: wWidth, height } = Dimensions.get("window");

const FavoriteOutfits = ({
  navigation,
}: HomeNavigationProps<"FavoriteOutfits">) => {
  const theme = useTheme();
  const width = (wWidth - theme.spacing.m * 2 - theme.spacing.s) / 2;
  const [outfits, setOutfits] = useState(outfitsData);

  const handleAddToFavorites = () => {
    setOutfits(outfits.filter((outfit) => !outfit.selected));
  };
  const list = useRef<TransitioningView>(null);
  const transition = (
    <Transition.Change interpolation="easeInOut" durationMs={1000} />
  );
  const handleOnPress = () => {
    list.current?.animateNextTransition();
    handleAddToFavorites();
  };

  return (
    <Box flex={1} style={{ paddingBottom: height / 8 }} backgroundColor="white">
      <Header
        title="Favorite Outfits"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Box flex={1} marginTop="s" backgroundColor="secondary">
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: theme.spacing.m }}
          style={styles.scrollContainer}
        >
          <Transitioning.View ref={list} transition={transition}>
            <Box flexDirection="row">
              <Box marginRight="s">
                {outfits
                  .filter(({ id }) => id % 2 !== 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
              <Box>
                {outfits
                  .filter(({ id }) => id % 2 === 0)
                  .map((outfit) => (
                    <Outfit key={outfit.id} outfit={outfit} width={width} />
                  ))}
              </Box>
            </Box>
          </Transitioning.View>
        </ScrollView>
      </Box>
      <Footer label="Add more to favorites" onPress={handleOnPress} />
    </Box>
  );
};

export default FavoriteOutfits;

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: "white",
    borderBottomRightRadius: theme.borderRadii.xl,
  },
});
