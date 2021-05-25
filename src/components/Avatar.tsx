import React from "react";
import { DRAWER_WIDTH } from "../Home/Drawer";
import { Box } from "./Theme";

interface AvatarProps {}

const Avatar = ({}: AvatarProps) => {
  return (
    <Box
      position="absolute"
      left={DRAWER_WIDTH / 2 - 50}
      top={-50}
      alignSelf="center"
      backgroundColor="primary"
      width={100}
      height={100}
      style={{ borderRadius: 50 }}
    />
  );
};

export default Avatar;
