import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, useTheme, Text } from "../../../components";
import { lerp } from "./Scale";

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
  minX: number;
  maxX: number;
}

const formatter = Intl.DateTimeFormat("en", { month: "short" });
const ROW_HEIGHT = 16;

const Underlay = ({ dates, minY, maxY, step, minX, maxX }: UnderlayProps) => {
  const theme = useTheme();
  const numberOfMonths = new Date(maxX - minX).getMonth();
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} justifyContent="space-between">
        {[1, 0.66, 0.33, 0].map((t) => (
          <Box
            key={t}
            flexDirection="row"
            alignItems="center"
            height={ROW_HEIGHT}
            style={{
              top: t === 0 ? ROW_HEIGHT / 2 : t === 1 ? -ROW_HEIGHT / 2 : 0,
            }}
          >
            <Box width={theme.spacing.l} paddingRight="s">
              <Text color="darkGrey" textAlign="right">
                {Math.round(lerp(minY, maxY, t))}
              </Text>
            </Box>
            <Box flex={1} height={1} backgroundColor="darkGrey" opacity={0.4} />
          </Box>
        ))}
      </Box>
      <Box
        marginLeft="l"
        height={theme.spacing.l}
        flexDirection="row"
        alignItems="center"
      >
        {new Array(numberOfMonths)
          .fill(0)
          .map((_, i) => new Date(minX).getMonth() + i)
          .map((date, index) => (
            <Box width={step}>
              <Text key={index} color="darkGrey" textAlign="center">
                {formatter.format(date)}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;

const styles = StyleSheet.create({});
