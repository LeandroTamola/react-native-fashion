import React from "react";
import { StyleSheet, View } from "react-native";
import {
  BorderlessButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import SocialLogin from "./SocialLogin";
import { Box, Text } from "./Theme";

interface FooterProps {
  onPress: () => void;
  title: string;
  action: string;
}

const Footer = ({ onPress, title, action }: FooterProps) => {
  return (
    <Box paddingBottom="s">
      <SocialLogin />
      <Box alignItems="center">
        <BorderlessButton {...{ onPress }}>
          <Text>
            <Text variant="button">
              <Text>{`${title} `}</Text>
              <Text color="primary">{action}</Text>
            </Text>
          </Text>
        </BorderlessButton>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = StyleSheet.create({});
