import React from "react";
import Todo from "./Todo";
import CurrentTimeLine from "./CurrentTimeLine";
import TimeLine from "./TimeLine";
import styled from "styled-components";

const TaskList = styled.div`
  margin-left: 40px;
  z-index: 10;
  height: 900px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 670px;
`;

class TodoList extends React.Component {
  render() {
    return (
      <Wrapper>
        <TimeLine />
        <TaskList>
          <CurrentTimeLine />
          {this.props.todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              // edit={() => this.props.edit(todo.id)}
              // width={this.props.checkIntersecting(
              //     this.props.todos,
              //     todo
              // )}
              handleRemove={() => this.props.handleRemove(todo.id)}
              toggleComplete={() => this.props.toggleComplete(todo.id)}
            />
          ))}
        </TaskList>
      </Wrapper>
    );
  }
}

export default TodoList;
