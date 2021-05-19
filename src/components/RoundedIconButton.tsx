import React from "react";
import { RectButton } from "react-native-gesture-handler";

import RoundedIcon, { RoundedIconProps } from "./RoundedIcon";

interface RoundedIconButtonProps extends RoundedIconProps {
  onPress: any;
}

const RoundedIconButton = ({ onPress, ...props }: RoundedIconButtonProps) => {
  return (
    <RectButton {...{ onPress }} activeOpacity={0}>
      <RoundedIcon {...props} />
    </RectButton>
  );
};

RoundedIconButton.defaultProps = {
  iconRatio: 0.7,
};

export default RoundedIconButton;
