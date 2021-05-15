import React from "react";

import {
  AuthenticationRoutes,
  StackNavigationProps,
} from "../components/Navigation";
import { Box, Button, Container, RoundedIcon, Text } from "../components";
import { RoundedIconButton } from "../components";

const SIZE = 50;

const PasswordChanged = ({
  navigation,
}: StackNavigationProps<AuthenticationRoutes, "PasswordChanged">) => {
  return (
    <Container
      pattern={0}
      footer={
        <RoundedIconButton
          name="x"
          color="secondary"
          size={SIZE * 1.2}
          backgroundColor="white"
          onPress={() => navigation.navigate("Welcome")}
        />
      }
    >
      <Box flex={1} alignItems="center" padding="l">
        <Box marginVertical="xl">
          <RoundedIcon
            name={"check"}
            color="primary"
            size={60}
            backgroundColor={"primaryLight"}
          />
        </Box>
        <Text variant="title" textAlign="center" marginBottom="l">
          Your password was successfully changed
        </Text>
        <Text variant="body" textAlign="center" marginBottom="l">
          Close this window and login again
        </Text>
        <Box alignItems="center" marginTop="m">
          <Button
            variant="primary"
            label="Login again"
            onPress={() => navigation.navigate("Login")}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default PasswordChanged;
