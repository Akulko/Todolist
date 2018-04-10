import React from "react";
import styled from "styled-components";

const CurrentTime = styled.span`
  width: 670px;
  text-align: right;
  margin-top: ${props => props.margin}px;
  position: absolute;
  display: block;
  left: 40px;
  height: 0;
  z-index: 20;
  border-top: 2px solid #db4437;
`;

class CurrentTimeLine extends React.Component {
  state = {
    currentMargin: 0
  };

  getCurrentMargin = () => {
    const d = new Date();
    let currentMargin = (d.getHours() - 8) * 90 + d.getMinutes() * 1.3;
    if (currentMargin < 0) currentMargin = 0;
    if (currentMargin >= 745) currentMargin = 745;
    return currentMargin;
  };

  update = () => {
    this.setState({
      currentMargin: this.getCurrentMargin()
    });
  };

  componentWillMount() {
    this.update();
    setInterval(this.update, 60000);
  }

  render() {
    return <CurrentTime margin={this.state.currentMargin}>Now!</CurrentTime>;
  }
}

export default CurrentTimeLine;
