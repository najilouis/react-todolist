import "./App.css";
import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route } from "react-router-dom"; // HashRouter used instead of BrowserRouter because the github pages
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
// import { v4 as uuid } from "uuid";

import About from "./components/pages/About";
import axios from "axios";

class App extends Component {
  // state = { // hardcoded todos
  //   todos: [
  //     {
  //       id: uuid(),
  //       title: "Take out the trash",
  //       completed: false,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Dinner with wife",
  //       completed: true,
  //     },
  //     {
  //       id: uuid(),
  //       title: "Meeting with boss",
  //       completed: false,
  //     },
  //   ],
  // };

  state = {
    initLoading: true,
    todos: [],
  };

  async componentDidMount() {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      console.log(res.data);
      this.setState({ initLoading: false, todos: res.data });
    } catch (error) {
      console.log(error);
    }
  }

  // Toggle Complete
  markComplete = (id) => {
    console.log("from app.js", id);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // delTodo = (id) => {
  //   console.log(id);
  //   this.setState({
  //     todos: [...this.state.todos.filter((todo) => todo.id !== id)],
  //   });
  // };

  delTodo = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      this.setState({
        todos: [...this.state.todos.filter((todo) => todo.id !== id)],
      });
    } catch (error) {
      alert("Todo can't be deleted");
    }
  };

  // addTodo = (title) => {
  //   console.log(title);
  // const newTodo = {
  //   id: uuid(),
  //   title,
  //   completed: false,
  // };
  // this.setState({ todos: [...this.state.todos, newTodo] });
  // };

  addTodo = async (title) => {
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          title,
          completed: false,
        }
      );
      console.log(res);
      this.setState({ todos: [...this.state.todos, res.data] });
    } catch (error) {
      alert("Todo can't be added");
    }
  };

  render() {
    // function App() {
    console.log(this.state.todos);
    return (
      <Router basename="/">
        <div className="App">
          {/* <h1>App</h1> */}
          <div className="container">
            <Header></Header>
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo}></AddTodo>
                  {this.state.initLoading ? (
                    <h5 className="loading">Fetching Todos...</h5>
                  ) : (
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  )}
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
