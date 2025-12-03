import React, { FC } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MatchCard } from "../components/MatchCard";
import { matches } from "../data/matches";
import { Match } from "../types/match";

export const MatchesScreen: FC = () => {
  const renderItem = ({ item }: { item: Match }) => <MatchCard match={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Today&apos;s Games</Text>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f8",
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 48,
    marginBottom: 8,
    marginHorizontal: 16,
  },
  listContent: {
    paddingBottom: 24,
  },
});
