import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MatchCard } from "../components/MatchCard";
import { matches } from "../data/matches";
import { Match } from "../types/match";
import { FlatList } from "react-native/types_generated/index";

export const MatchesScreen: FC = () => {
  const renderItem = ({ item }: { item: Match }) => <MatchCard match={item} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today&apos;s Games</Text>

      <FlatList
        data={matches}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
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
