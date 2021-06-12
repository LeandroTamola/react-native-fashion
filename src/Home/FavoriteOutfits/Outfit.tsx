import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Box, RoundedIcon } from "../../components";

interface OutfitProps {
  outfit: { id: number; color: string; aspectRatio: number; selected: boolean };
  width: number;
}

const Outfit = ({ outfit, width }: OutfitProps) => {
  const [selected, setSelected] = useState(false);
  const height = width * outfit.aspectRatio;
  return (
    <RectButton
      onPress={() => {
        setSelected((prev) => !prev);
        outfit.selected = !outfit.selected;
      }}
      activeOpacity={0}
    >
      <Box
        style={{ backgroundColor: outfit.color, width, height }}
        flex={1}
        marginBottom="m"
        borderRadius="m"
      >
        {selected && (
          <RoundedIcon
            name="check"
            backgroundColor="primary"
            color="background"
            size={24}
            style={styles.checkedIcon}
          />
        )}
      </Box>
    </RectButton>
  );
};

export default Outfit;

const styles = StyleSheet.create({
  checkedIcon: { marginLeft: 5, marginTop: 5 },
});
