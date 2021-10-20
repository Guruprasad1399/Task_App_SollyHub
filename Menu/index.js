import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Menu Screen ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141515",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#556969",
  },
});
