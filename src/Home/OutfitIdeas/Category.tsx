import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Box, Text } from "../../components";
import { theme } from "../../components/Theme";

interface CategoryProps {
  title: string;
  color: string;
}

const INNER_RADIUS = 30;
const OUTER_RADIUS = 34;

const Category = ({ title, color }: CategoryProps) => {
  const [selected, setSelected] = useState<boolean>(false);
  return (
    <BorderlessButton onPress={() => setSelected((prev) => !prev)}>
      <Box marginTop="s" marginLeft="m" alignItems="center">
        <Box
          width={OUTER_RADIUS * 2}
          height={OUTER_RADIUS * 2}
          justifyContent="center"
          alignItems="center"
        >
          {selected && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                borderRadius: OUTER_RADIUS,
                borderColor: theme.colors.backgroundColor,
                borderWidth: 1,
              }}
            />
          )}
          <View style={[styles.container, { backgroundColor: color }]}></View>
        </Box>
        <Text marginTop="s">{title}</Text>
      </Box>
    </BorderlessButton>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: INNER_RADIUS * 2,
    height: INNER_RADIUS * 2,
    borderRadius: INNER_RADIUS,
  },
});
