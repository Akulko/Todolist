import React from "react";
import styled from "styled-components";
import * as moment from "moment";
import { connect } from "react-redux";
import { addTodo } from "../store/modules/todo/action";
import {
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";

const StyledFormControl = styled(FormControl)`
  width: 170px !important;
`;

class AddTodo extends React.Component {
  state = {
    text: "",
    start: "",
    duration: "",
    startMoment: {},
    durationMoment: {},
    width: 0,
    am: { start: "am", duration: "am" }
  };

  addTodo = () => {
    const { start, duration } = this.state.am;

    if (start === "pm" && duration === "am") {
      return alert("We plan tasks only for today!");
    }
    if (
      this.state.isCorrectStartInput &&
      this.state.isCorrectDurationInput &&
      this.state.start &&
      this.state.duration
    ) {
      this.props.dispatch(addTodo(this.state));
      this.setState({ text: "", start: "", duration: "" });
    } else alert("Not all fields are filled in correctly");
  };

  handleAdd = e => {
    if (e.keyCode === 13) {
      this.props.dispatch(addTodo(this.state.text));
    }
  };

  handleTextChange = e => {
    this.setState({ text: e.target.value });
  };

  handleCorrectStartInput = e => {
    moment(e.target.value, "h:mm a", true).isValid()
      ? this.setState({
          isCorrectStartInput: "success"
        })
      : this.setState({ isCorrectStartInput: "error" });
  };

  handleCorrectDurationInput = e => {
    moment(e.target.value, "h:mm a", true).isValid()
      ? this.setState({ isCorrectDurationInput: "success" })
      : this.setState({ isCorrectDurationInput: "error" });
  };

  handleStartChange = e => {
    const timeWithAM = e.target.value.split(" ");
    const time = timeWithAM[0].split(":");
    this.setState({
      start: e.target.value,
      am: { ...this.state.am, start: timeWithAM[1] },
      startMoment: moment().set({
        hour: time[0],
        minute: time[1]
      })
    });
  };

  handleDurationChange = e => {
    const timeWithAM = e.target.value.split(" ");
    const time = timeWithAM[0].split(":");
    this.setState({
      duration: e.target.value,
      am: { ...this.state.am, duration: timeWithAM[1] },
      durationMoment: moment().set({
        hour: time[0],
        minute: time[1]
      })
    });
  };

  render() {
    return (
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Title</ControlLabel>{" "}
          <FormControl
            onChange={this.handleTextChange}
            type="text"
            placeholder="Add some task here"
            value={this.state.text}
          />
        </FormGroup>{" "}
        <FormGroup validationState={this.state.isCorrectStartInput}>
          <ControlLabel>Start</ControlLabel>{" "}
          <StyledFormControl
            type="text"
            value={this.state.start}
            onBlur={this.handleCorrectStartInput}
            placeholder="8:00 AM"
            onChange={this.handleStartChange}
          />
          <FormControl.Feedback />
        </FormGroup>{" "}
        <FormGroup validationState={this.state.isCorrectDurationInput}>
          <ControlLabel>End</ControlLabel>{" "}
          <StyledFormControl
            type="text"
            value={this.state.duration}
            onBlur={this.handleCorrectDurationInput}
            placeholder="5:00 PM"
            onChange={this.handleDurationChange}
          />
          <FormControl.Feedback />
        </FormGroup>{" "}
        <Button onClick={this.addTodo}>Add Todo</Button>
      </Form>
    );
  }
}

function mapReduxToProps(redux) {
  return {
    items: redux.todos.items
  };
}

export default connect(mapReduxToProps)(AddTodo);
