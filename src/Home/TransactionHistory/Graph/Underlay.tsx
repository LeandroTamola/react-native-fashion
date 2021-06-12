import React from "react";
import { StyleSheet, View } from "react-native";
import moment from "moment";

import { Box, useTheme, Text } from "../../../components";
import { lerp } from "./Scale";

interface UnderlayProps {
  minY: number;
  maxY: number;
  startDate: number;
  numberOfMonths?: number;
  step: number;
}

const ROW_HEIGHT = 16;

const Underlay = ({
  minY,
  maxY,
  startDate,
  numberOfMonths,
  step,
}: UnderlayProps) => {
  const theme = useTheme();
  const minDate = moment(startDate);
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
              <Text color="info" textAlign="right">
                {Math.round(lerp(minY, maxY, t))}
              </Text>
            </Box>
            <Box flex={1} height={1} backgroundColor="info" opacity={0.4} />
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
          .map((_, i) => minDate.clone().add(i, "month"))
          .map((date, index) => (
            <Box width={step}>
              <Text key={index} color="info" textAlign="center">
                {date.format("MMM")}
              </Text>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Underlay;
