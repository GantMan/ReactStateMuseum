/************************************************
 * This example is one of many examples
 *         -= The React State Museum =-
 * View other state management options and read
 * more in the blog post and the master repo:
 *
 * https://github.com/GantMan/ReactStateMuseum
 ************************************************/
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import AppContext from "./src/context/AppContext";
import ItemsController from "./src/components/ItemsController";
import ItemsList from "./src/components/ItemsList";

export default function App() {
  const [items, setItems] = useState(["Pizza", "Falafel", "Sushi"]);

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleClearItems = () => {
    setItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        addItem: handleAddItem,
        clearItems: handleClearItems,
        items,
      }}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.headline}>Welcome to React Native useContext!</Text>
        <ItemsController />
        <ItemsList />
        <StatusBar style="auto" />
      </SafeAreaView>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  headline: {
    fontSize: 18,
    marginVertical: 16,
  },
});
