import React, { useRef } from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { AuthNavigationProps } from "../components/Navigation";
import { useFormik } from "formik";

import { Button, Container, Text, TextInput, Footer } from "../components";

import { Box } from "../components/Theme";
import { SignUpSchema } from "../components/Form/SignUpSchema";

const SignUp = ({ navigation }: AuthNavigationProps<"SignUp">) => {
  const footer = (
    <Footer
      title="Already have an account?"
      action="Login here"
      onPress={() => navigation.navigate("Login")}
    />
  );
  const password = useRef<RNTextInput>(null);
  const confirmPassword = useRef<RNTextInput>(null);
  const { handleChange, handleBlur, handleSubmit, errors, touched } = useFormik(
    {
      validationSchema: SignUpSchema,
      initialValues: {
        email: "",
        password: "",
        passwordConfirmation: "",
      },
      onSubmit: (values) => console.log(values),
    }
  );
  return (
    <Container pattern={1} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title" textAlign="center" marginVertical="m">
          Create account
        </Text>
        <Text
          variant="body"
          textAlign="center"
          paddingHorizontal="xl"
          marginBottom="xl"
        >
          Let's us know what your name, email, and your password
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
              onSubmitEditing={() => password.current?.focus()}
            />
          </Box>
          <Box marginBottom="m">
            <TextInput
              ref={password}
              icon="lock"
              placeholder="Enter your password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              autoCompleteType="password"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
          </Box>
          <TextInput
            ref={confirmPassword}
            icon="lock"
            placeholder="Confirm your password"
            onChangeText={handleChange("passwordConfirmation")}
            onBlur={handleBlur("passwordConfirmation")}
            error={errors.passwordConfirmation}
            touched={touched.passwordConfirmation}
            autoCompleteType="password"
            returnKeyType="go"
            returnKeyLabel="submit"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />

          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="Create your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
      <View />
    </Container>
  );
};

export default SignUp;
