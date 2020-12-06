import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      backgroundColor: "#f4f4f4",
    };
  };

  // markComplete(e) { // Binding Method
  //   console.log(this.props);
  // }

  // markComplete = (e) => {  // not used because of props
  //   console.log(this.props);
  // };

  render() {
    const { id, title } = this.props.todo;
    return (
      // <div style={{ backgroundColor: "#f4f4f4" }}> // STYLING METHOD #1
      // <div style={itemStyle}> // STYLING METHOD #2
      <div style={this.getStyle()}>
        {/* STYLING METHOD #3 */}
        {/* <input type="checkbox" onChange={this.markComplete.bind(this)} /> {""} // BINDING OPTION */}
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, id)}
        />{" "}
        {/* <p>{this.props.todo.title}</p> */}
        {title}
        <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
          X
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  // for props type validation
  todo: PropTypes.object.isRequired,
};

// const itemStyle = { // used for METHOD #2
//   backgroundColor: "#f4f4f4",
// };

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
  width: "25px",
};

export default TodoItem;
