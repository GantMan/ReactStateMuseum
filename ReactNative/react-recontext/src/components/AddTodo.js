import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet
} from "react-native";
import { dispatch } from "../recontext/store";

class AddTodo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handlePress = () => {
    const { text } = this.state;
    if (!text) return;
    dispatch("ADD_TODO", { newTodoContent: text });
    this.setState({
      text: ""
    });
  };

  render() {
    const { text } = this.state;

    return (
      <View style={styles.root}>
        <TextInput
          placeholder="Add thing to do ..."
          value={text}
          onChangeText={text => this.setState({ text })}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={this.handlePress}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    bottom: 0,
    flexDirection: "row"
  },
  input: {
    flex: 1,
    fontSize: 24,
    paddingLeft: 15,
    color: "#212121"
  },
  button: {
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});

export default AddTodo;
