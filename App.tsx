import React, { FC } from "react";
import { StatusBar } from "expo-status-bar";
import { HomeScreen } from "./src/screens/HomeScreen";
import { SafeAreaView } from "react-native/types_generated/index";

const App: FC = () => {
  const showHome = false;

  return (
    <SafeAreaView>
      <StatusBar barStyle={showHome ? "light-content" : "dark-content"} />
      {showHome ? <HomeScreen /> : <MatchesScreen />}
    </SafeAreaView>
  );
};

export default App;
