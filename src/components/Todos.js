import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  // render() {
  //   console.log("TODOS COMP", this.props.todos);
  //   return (
  //     <div>
  //       <h1>Todos</h1>
  //     </div>
  //   );
  // }

  // markComplete = () => { // not used because of props
  //   console.log("Hello");
  // };

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

Todos.propTypes = {
  // for props type validation
  todos: PropTypes.array.isRequired,
};

export default Todos;
