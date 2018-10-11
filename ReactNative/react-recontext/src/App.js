import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoList from "./components/TodoList";
import { Provider } from "./recontext/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Todo</Text>
            <Text style={styles.subtitle}>react-recontext example</Text>
          </View>
          <TodoList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    paddingTop: 32,
    backgroundColor: "#2196F3",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#ffffff",
    fontSize: 24
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 14
  }
});
