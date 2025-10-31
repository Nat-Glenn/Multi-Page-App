import { Text, View } from "react-native";
import React from "react";
import HomePage from "@/components/home-page";  

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HomePage />

import React from "react";
import { registerRootComponent } from "expo";
import { View } from "react-native";
import AccountsPage from "../components/AccountsPage";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AccountsPage />   
    </View>
  );
}
