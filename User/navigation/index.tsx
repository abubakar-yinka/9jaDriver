import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import HomeScreen from "../screens/HomeScreen";
import Login from "../screens/profile/login";
import Otp from "../screens/profile/otp";
import Register from "../screens/profile/register";
import MapScreen from '../screens/MapScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" options={{ headerShown: false}} component={Login} />
      <Stack.Screen name="Otp" options={{ headerShown: false}} component={Otp} />
      <Stack.Screen name="Home" options={{ headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="MapScreen" options={{ headerShown: false}} component={MapScreen} />
      <Stack.Screen name="Register" options={{ headerShown: false}} component={Register} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
