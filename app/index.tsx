import React from "react";
import { View } from "react-native";
import HomePage from "./home-page";

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
    </View>
  );
}
