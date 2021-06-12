import React, { forwardRef } from "react";
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { Box, useTheme } from "../Theme";
import { Feather as Icon } from "@expo/vector-icons";
import { RoundedIcon } from "../../components";

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  icon: any;
  error: string;
  touched: boolean;
  ref: any;
}

const TextInput = forwardRef<RNTextInput, TextInputProps>(
  ({ icon, error, touched, ...props }, ref) => {
    const theme = useTheme();
    const SIZE = theme.borderRadii.m * 2;
    const reColor = !touched ? "text" : error ? "danger" : "primary";
    const color = theme.colors[reColor];

    return (
      <Box
        flexDirection="row"
        height={48}
        alignItems="center"
        borderRadius="s"
        borderWidth={StyleSheet.hairlineWidth}
        borderColor={reColor}
        padding="m"
      >
        <Box paddingRight="s">
          <Icon size={16} name={icon} {...{ color }} />
        </Box>
        <Box flex={1}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={color}
            {...{ ref }}
            {...props}
          />
        </Box>
        {touched && (
          <RoundedIcon
            name={!error ? "check" : "x"}
            color="background"
            size={SIZE}
            backgroundColor={!error ? "primary" : "danger"}
          />
        )}
      </Box>
    );
  }
);

export default TextInput;
