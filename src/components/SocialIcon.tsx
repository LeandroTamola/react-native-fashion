import React, { ReactNode } from "react";
import { Box } from "./Theme";

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      backgroundColor="white"
      width={44}
      height={44}
      margin="s"
      alignItems="center"
      justifyContent="center"
      borderRadius="l"
    >
      {children}
    </Box>
  );
};

export default SocialIcon;
