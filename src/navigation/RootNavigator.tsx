import React, { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { MatchesNavigator } from "./MatchesNavigator";

export type RootTabParamList = {
  Home: undefined;
  Matches: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const RootNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Matches"
          component={MatchesNavigator}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
