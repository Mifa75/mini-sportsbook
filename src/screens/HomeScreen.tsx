import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mini Sportsbook</Text>
      <Text style={styles.subtitle}>Welcome! Day 1 – basic layout.</Text>
      <Text style={styles.body}>
        Tomorrow we&apos;ll add real navigation. For now this is just a static
        home screen.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "#0b1020",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#c5c6d0",
    marginBottom: 16,
  },
  body: {
    fontSize: 14,
    color: "#c5c6d0",
  },
});
