import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SocialIcon } from ".";
import { Apple, Google, Facebook } from "../assets/svgs";
import { Box } from "./Theme";

const SocialLogin = () => {
  return (
    <Box
      padding="xl"
      marginVertical="m"
      flex={1}
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <SocialIcon>{<Facebook />}</SocialIcon>
      <SocialIcon>{<Google />}</SocialIcon>
      <SocialIcon>{<Apple />}</SocialIcon>
    </Box>
  );
};

export default SocialLogin;
