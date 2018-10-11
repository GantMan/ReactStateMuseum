import React from "react";
import { FlatList } from "react-native";
import { connect } from "../recontext/store";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

class TodoList extends React.PureComponent {
  handlePress = () => {
    console.log("pressed");
  };

  render() {
    const { todos } = this.props;
    console.log(todos);
    return (
      <FlatList
        data={todos}
        renderItem={item => <Todo item={item.item} />}
        keyExtractor={item => item.id.toString()}
        ListFooterComponent={<AddTodo />}
      />
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(TodoList);
