import React, { useRef } from "react";
import { View, TextInput as RNTextInput } from "react-native";
import { AuthNavigationProps } from "../components/Navigation";
import { useFormik } from "formik";

import {
  Button,
  Container,
  Text,
  TextInput,
  CheckBox,
  Footer,
} from "../components";

import { Box } from "../components/Theme";
import { RectButton } from "react-native-gesture-handler";
import { LoginSchema } from "../components/Form/LoginSchema";

const Login = ({ navigation }: AuthNavigationProps<"Login">) => {
  const footer = (
    <Footer
      title="Don't have an account?"
      action="Sign Up here"
      onPress={() => navigation.navigate("SignUp")}
    />
  );
  const password = useRef<RNTextInput>(null);
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    setFieldValue,
    touched,
    values,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "", remember: false },
    onSubmit: () => navigation.navigate("Home"),
  });
  return (
    <Container pattern={0} {...{ footer }}>
      <Box padding="xl">
        <Text variant="title" textAlign="center" marginVertical="m">
          Welcome Back
        </Text>
        <Text
          variant="body"
          textAlign="center"
          paddingHorizontal="xl"
          marginBottom="xl"
        >
          Use your credentials below and login to your account
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
          <TextInput
            ref={password}
            icon="lock"
            placeholder="Enter your password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            error={errors.password}
            touched={touched.password}
            autoCompleteType="password"
            returnKeyType="go"
            returnKeyLabel="submit"
            onSubmitEditing={() => handleSubmit()}
            secureTextEntry
          />

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop="m"
          >
            <CheckBox
              label="Remember me"
              checked={values.remember}
              onChange={() => setFieldValue("remember", !values.remember)}
            />
            <RectButton
              activeOpacity={0}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text color="primary">Forgot password</Text>
            </RectButton>
          </Box>
          <Box alignItems="center" marginTop="l">
            <Button
              variant="primary"
              label="Login into your account"
              onPress={handleSubmit}
            />
          </Box>
        </Box>
      </Box>
      <View />
    </Container>
  );
};

export default Login;
