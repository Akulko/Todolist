import React from "react";
import HourLine from "./HourLine";
import styled from "styled-components";

const TimeBlock = styled.div`
  width: 45px;
  float: left;
`;

const renderTimeLine = () => {
  let timeLine = [];
  for (let i = 8; i < 18; i++) {
    if (i < 13) {
      timeLine.push({ hour: i, key: i });
    } else {
      timeLine.push({ hour: i - 12, key: i });
    }
  }
  return timeLine.map(hour => <HourLine key={hour.key} hour={hour.hour} />);
};

const TimeLine = () => {
  return <TimeBlock>{renderTimeLine()}</TimeBlock>;
};

export default TimeLine;
