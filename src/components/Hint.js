import React from "react";
import styled from "styled-components";

const HintBox = styled.div`
  width: 200px;
  background-color: #6e9ecf;
`;

const Hint = props => {
  return <HintBox>{props.text}</HintBox>;
};

export default Hint;
