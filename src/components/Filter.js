import React from "react";
import { Nav, NavItem } from "react-bootstrap";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  margin: 13px 0;
`;

class Filter extends React.Component {
  state = { currentSelect: "ALL" };

  handleSelect = selectedKey => {
    this.setState({ currentSelect: selectedKey });
    this.props.filter(selectedKey);
  };

  render() {
    return (
      <StyledNav
        bsStyle="pills"
        activeKey={this.state.currentSelect}
        onSelect={this.handleSelect}
      >
        <NavItem eventKey={"ALL"}>Show all</NavItem>
        <NavItem eventKey={"COMPLETED"}>Show completed</NavItem>
        <NavItem eventKey={"INCOMPLETED"}>Show incompleted</NavItem>
      </StyledNav>
    );
  }
}

export default Filter;
