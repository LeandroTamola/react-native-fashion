import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  CompositeNavigationProp,
  ParamListBase,
  RouteProp,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export interface AuthNavigationProps<
  RouteName extends keyof AuthenticationRoutes
> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthenticationRoutes, RouteName>,
    DrawerNavigationProp<AppRoutes, "Home">
  >;
  route: RouteProp<AuthenticationRoutes, RouteName>;
}

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: DrawerNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type AppRoutes = {
  Authentication: undefined;
  Home: undefined;
};

export type AuthenticationRoutes = {
  Onboarding: undefined;
  Welcome: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  PasswordChanged: undefined;
};

export type HomeRoutes = {
  OutfitIdeas: undefined;
  FavoriteOutfits: undefined;
  TransactionHistory: undefined;
};
