import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Match } from "../types/match";

interface MarchCardProps {
  match: Match;
}

export const MatchCard: FC<MarchCardProps> = ({ match }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.teams}>
        {match.homeTeam} vs {match.awayTeam}
      </Text>

      <Text style={styles.market}>{match.market}</Text>

      <View style={styles.row}>
        <Text style={styles.oddsLabel}>Home</Text>
        <Text style={styles.oddsValue}>{match.homeOdds}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.oddsLabel}>Away</Text>
        <Text style={styles.oddsValue}>{match.awayOdds}</Text>
      </View>

      <Text style={styles.time}>{match.startTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#ffffff",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  teams: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  market: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  oddsLabel: {
    fontSize: 14,
  },
  oddsValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  time: {
    marginTop: 8,
    fontSize: 12,
    color: "#999",
  },
});
