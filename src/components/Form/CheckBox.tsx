import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Text } from "../Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

interface CheckBoxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const CheckBox = ({ label, checked, onChange }: CheckBoxProps) => {
  return (
    <RectButton activeOpacity={0} onPress={onChange}>
      <Box flexDirection="row" alignItems="center">
        <Box
          borderRadius="s"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          marginRight="s"
          height={20}
          width={20}
          borderWidth={1}
          borderColor="primary"
          backgroundColor={checked ? "primary" : "white"}
        >
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
};

export default CheckBox;

const styles = StyleSheet.create({});
