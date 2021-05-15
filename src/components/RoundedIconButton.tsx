import React from "react";
import {
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import { Box } from "./Theme";
import { Dimensions } from "react-native";
import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: any;
}

const { width } = Dimensions.get("window");
const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton {...{ onPress }} activeOpacity={0}>
      <Box
        alignItems="center"
        justifyContent="center"
        marginVertical="l"
        width={width}
      >
        <RoundedIcon {...props} />
      </Box>
    </RectButton>
  );
};

export default RoundedIconButton;
