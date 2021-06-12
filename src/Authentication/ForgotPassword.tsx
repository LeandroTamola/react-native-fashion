import { useFormik } from "formik";
import React from "react";
import { Linking, StyleSheet } from "react-native";

import { ForgotPasswordSchema } from "../components/Form/ForgotPasswordSchema";
import { Box, Container, Footer, TextInput, Text, Button } from "../components";
import { AuthNavigationProps } from "../components/Navigation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<"ForgotPassword">) => {
  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL("mailto:help@support.com")}
    />
  );

  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: ForgotPasswordSchema,
      initialValues: { email: "" },
      onSubmit: () => {
        navigation.navigate("PasswordChanged");
      },
    }
  );
  return (
    <Container pattern={2} {...{ footer }}>
      <Box>
        <Text variant="title" textAlign="center" marginVertical="m">
          Forgot password?
        </Text>
        <Text
          variant="body"
          textAlign="center"
          paddingHorizontal="xl"
          marginBottom="xl"
        >
          Enter the email address associated with your account
        </Text>
        <Box>
          <Box marginBottom="m">
            <TextInput
              icon="mail"
              placeholder="Enter your email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              autoCompleteType="email"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => handleSubmit()}
            />
          </Box>
          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="Reset password"
              onPress={handleSubmit}
            />
          </Box>
          <Box alignItems="center" marginTop="l">
            <TouchableWithoutFeedback>
              <Text>
                <Text variant="button">
                  <Text>Don't work?</Text>
                  <Text color="primary"> Try another way</Text>
                </Text>
              </Text>
            </TouchableWithoutFeedback>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
