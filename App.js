import React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import Navigation from "./navigation/navigation";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}
