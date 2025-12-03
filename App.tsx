import React, { FC } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { HomeScreen } from "./src/screens/HomeScreen";
import { MatchesScreen } from "./src/screens/MatchesScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const App: FC = () => {
  // true = Home, false = Matches list
  const showHome = false;

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar barStyle={showHome ? "light-content" : "dark-content"} />
      {showHome ? <HomeScreen /> : <MatchesScreen />}
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
