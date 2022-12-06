import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NAVIGATIONS_ROUTE } from "./src/navigation/routes";
import SplashScreen from "./src/pages/splash/SplashScreen";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import LoginScreen from "./src/pages/login/LoginScreen";
import SignUpScreen from "./src/pages/login/SignUpScreen";
import RootStack from "./src/navigation/RootStack";
import BookDetailScreen from "./src/pages/book/BookDetailScreen";
import ShoppingScreen from "./src/pages/shopping/ShoppingScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={NAVIGATIONS_ROUTE.SCREEN_SPLASH}>
        <Stack.Screen name={NAVIGATIONS_ROUTE.SCREEN_SPLASH} component={SplashScreen} options={{headerShown : false}} />
        <Stack.Screen name={NAVIGATIONS_ROUTE.SCREEN_LOGIN} component={LoginScreen} options={{headerShown : false}} />
        <Stack.Screen name={NAVIGATIONS_ROUTE.SCREEN_SIGNUP} component={SignUpScreen} options={{headerShown : false}} />
        <Stack.Screen name={NAVIGATIONS_ROUTE.ROOT_STACK} component={RootStack} options={{headerShown : false}} />
        <Stack.Screen name={NAVIGATIONS_ROUTE.SCREEN_BOOKDETAIL} component={BookDetailScreen} options={{headerShown : false}} />
        <Stack.Screen name={NAVIGATIONS_ROUTE.SCREEN_SHOPPING} component={ShoppingScreen} options={{headerShown : false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}