import React, { FC } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MatchesScreen } from "../screens/MatchesScreen";
import { MatchDetailScreen } from "../screens/MatchDetailScreen";
import { Match } from "../types/match";

export type MatchesStackParamList = {
  MatchesList: undefined;
  MatchDetail: { match: Match };
};

const Stack = createNativeStackNavigator<MatchesStackParamList>();

export const MatchesNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MatchesList"
        component={MatchesScreen}
        options={{ title: "Matches" }}
      />
      <Stack.Screen
        name="MatchDetail"
        component={MatchDetailScreen}
        options={{ title: "Match detail" }}
      />
    </Stack.Navigator>
  );
};
