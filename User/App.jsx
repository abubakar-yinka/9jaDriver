import "intl";
import "intl/locale-data/jsonp/en";

import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import {
  PermissionsAndroid,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Store } from "./Redux/store";

//API

import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";

const link = createHttpLink({
  uri: "http://192.168.43.187:5000/graphql",
});

export default function App() {
  let [fontsLoaded] = useFonts({
    FilsonPro: require("./assets/fonts/FilsonPro-Regular.ttf"),
    "FilsonPro-Bold": require("./assets/fonts/FilsonPro-Bold.ttf"),
    "FilsonPro-Regular": require("./assets/fonts/FilsonPro-Regular.ttf"),
  });
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    // onError: ({ networkError, graphQLErrors }) => {
    //   console.log('graphQLErrors', graphQLErrors)
    //   console.log('networkError', networkError)
    // }
  });

  if (!isLoadingComplete && !fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ApolloProvider client={client}>
        <Provider store={Store}>
          <SafeAreaProvider>
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
              style={{ flex: 1 }}
            >
              <Navigation colorScheme={colorScheme} />
              <StatusBar />
            </KeyboardAvoidingView>
          </SafeAreaProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}
