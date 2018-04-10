import React from "react";
import styled from "styled-components";

const HourBlock = styled.div`
  height: 78px;
  width: 40px;
`;

const Hour = styled.span`
  font-size: 16px;
  position: absolute;
  border-top: 1px solid #c3c0c0;
  width: 670px;
  color: #8c8c8c;
`;

const HalfHour = styled.span`
  margin-top: 39px;
  font-size: 12px;
  position: absolute;
  color: #989696;
`;

const HourLine = props => {
  return (
    <HourBlock>
      <Hour>{props.hour + ":00"}</Hour>
      <HalfHour>{props.hour + ":30"}</HalfHour>
    </HourBlock>
  );
};

export default HourLine;
