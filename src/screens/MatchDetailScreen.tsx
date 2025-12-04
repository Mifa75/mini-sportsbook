import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MatchesStackParamList } from "../navigation/MatchesNavigator";
import { Match } from "../types/match";

type MatchDetailScreenProps = NativeStackScreenProps<
  MatchesStackParamList,
  "MatchDetail"
>;

export const MatchDetailScreen: React.FC<MatchDetailScreenProps> = ({
  route,
}) => {
  const match: Match = route.params.match;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {match.homeTeam} vs {match.awayTeam}
      </Text>

      <Text style={styles.label}>Market: {match.market}</Text>
      <Text style={styles.label}>Start time: {match.startTime}</Text>

      <View style={styles.oddsRow}>
        <Text style={styles.oddsLabel}>Home</Text>
        <Text style={styles.oddsValue}>{match.homeOdds}</Text>
      </View>

      <View style={styles.oddsRow}>
        <Text style={styles.oddsLabel}>Away</Text>
        <Text style={styles.oddsValue}>{match.awayOdds}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#0b1020",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#ffffff",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: "#c5c6d0",
    marginBottom: 8,
  },
  oddsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  oddsLabel: {
    fontSize: 16,
    color: "#c5c6d0",
  },
  oddsValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#ffffff",
  },
});
