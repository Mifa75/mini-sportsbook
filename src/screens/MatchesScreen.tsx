import React, { FC } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MatchCard } from "../components/MatchCard";
import { matches } from "../data/matches";
import { Match } from "../types/match";
import { MatchesStackParamList } from "../navigation/MatchesNavigator";

type Props = NativeStackScreenProps<MatchesStackParamList, "MatchesList">;

export const MatchesScreen: React.FC<Props> = ({ navigation }) => {
  const renderItem = ({ item }: { item: Match }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("MatchDetail", { match: item })}
    >
      <MatchCard match={item} />
    </TouchableOpacity>
  );

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
