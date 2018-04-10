import React, { Component } from "react";
import TodoList from "./containers/TodoList";
import { Provider } from "react-redux";
import store from "./store/createStore";
import AddTodo from "./containers/AddTodo";
import Options from "./containers/Options";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Wrapper>
          <AddTodo />
          <Options />
          <TodoList />
        </Wrapper>
      </Provider>
    );
  }
}

export default App;
