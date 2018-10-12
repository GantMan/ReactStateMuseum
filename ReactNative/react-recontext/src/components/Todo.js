import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { dispatch } from "../recontext/store";

class Todo extends React.PureComponent {
  handlePress = () => {
    const { item } = this.props;
    dispatch("TOGGLE_ITEM", { todoId: item.id });
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={styles.root}>
          <Text style={[styles.text, item.completed && styles.textCompleted]}>
            {item.content}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15
  },
  text: {
    marginLeft: 15,
    fontSize: 24
  },
  textCompleted: {
    color: "#212121",
    fontStyle: "italic",
    textDecorationLine: "line-through"
  }
});

export default Todo;
