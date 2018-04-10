import React, { Component } from "react";
import styled from "styled-components";
import FA from "react-fontawesome";
import * as moment from "moment";

const Title = styled.p`
  color: #6e9ecf;
  flex-grow: 1;
  padding: 10px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  border-left: 2px solid #6e9ecf;
  background: #e2ecf5;
  font-size: 14px;
  width: calc(
    ${props => (props.width ? 100 / (props.width + 1) : 100)}% - 40px
  );
  margin-bottom: 0;
  height: ${props => (props.height >= 39 ? props.height + "px" : "39px")};
  margin-top: ${props => props.margin + "px"};
  z-index: 10;
  position: absolute;
`;

const Button = styled.button`
  padding: 0;
  margin: 0 2px;
  font-size: 0.9rem;
  color: #a3c2e0;
  height: 50%;
  width: 40px;
  border: none;
  background: transparent;
  float: right;
  cursor: pointer;
  &:hover {
    color: #6e9ecf;
  }
`;

// const Input = styled.input`
//     padding: 10px;
//     border: 1px solid #6e9ecf;
//     margin-right: 50px;
//     font-family: "Open Sans";
//     font-size: 14px;
//     display: block;
//     width: 200px;
//     margin-top: 11px;
// `;

class Todo extends Component {
  convertTimeToMargin = (item, am) => {
    if (am.start === "am") {
      return ((moment(item).hours() - 8) * 60 + moment(item).minutes()) * 1.3;
    } else if (am.start === "pm") {
      return ((moment(item).hours() + 4) * 60 + moment(item).minutes()) * 1.3;
    }
  };

  getDuration = (start, duration, am) => {
    if (am.start === "am" && am.duration === "pm") {
      const time = moment(duration);
      time.set("hour", duration.hours() + 12);
      return moment(time).diff(start, "minutes") * 1.3;
    } else if (
      (am.start === "am" && am.duration === "am") ||
      (am.start === "pm" && am.duration === "pm")
    ) {
      return moment(duration).diff(start, "minutes") * 1.3;
    }
  };

  state = {
    text: this.props.text,
    isEdit: false,
    margin: this.convertTimeToMargin(this.props.start, this.props.am),
    height: this.getDuration(
      this.props.start,
      this.props.duration,
      this.props.am
    ),
    width: this.props.width,
    currentY: 0
  };

  handleUpdate = e => {
    if (e.keyCode === 13) {
      this.setState({ isEdit: !this.state.isEdit });
      this.props.edit(this.props.text);
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  trackState() {
    this.setState({ isEdit: !this.state.isEdit });
  }

  render() {
    const { isComplete } = this.props;
    const { handleRemove, toggleComplete } = this.props;
    const { height, margin, width, text } = this.state;
    return (
      <Wrapper
        draggable
        isComplete={isComplete}
        margin={margin}
        height={height}
        width={width}
        onDragStart={e => {
          this.setState({ currentY: e.pageY });
        }}
        onDragEnd={e => {
          this.setState({
            margin: margin + e.pageY - this.state.currentY,
            currentY: 0
          });
        }}
      >
        <Title>{text}</Title>
        <ButtonGroup>
          <Button onClick={toggleComplete}>
            <FA name="check" size="2x" />
          </Button>
          <Button onClick={handleRemove}>
            <FA name="times" size="2x" />
          </Button>
        </ButtonGroup>
      </Wrapper>
    );
  }
}

export default Todo;
