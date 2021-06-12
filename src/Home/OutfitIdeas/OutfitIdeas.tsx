import React, { useState } from "react";
import { useTransition } from "react-native-redash/lib/module/v1";
import { sub } from "react-native-reanimated";

import { Box, Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import Card from "./Card";
import Background from "./Background";
import Categories from "./Categories";
import { cards } from "./cardsData";

const step = 1 / (cards.length - 1);

const OutfitIdeas = ({ navigation }: HomeNavigationProps<"OutfitIdeas">) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  return (
    <Box flex={1} backgroundColor="background">
      <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => navigation.openDrawer() }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      <Categories />
      <Box flex={1}>
        <Background />
        {cards.map(
          ({ index, source }) =>
            currentIndex < index * step + step && (
              <Card
                key={index}
                position={sub(index * step, aIndex)}
                onSwipe={() => setCurrentIndex((prevState) => prevState + step)}
                {...{ source, step }}
              />
            )
        )}
      </Box>
    </Box>
  );
};

export default OutfitIdeas;
