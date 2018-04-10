import React from "react";
import Hint from "../components/Hint";

const CurrentHint = ({ hints }) => {
  renderHint = hintType => {
    return hints
      .filter(hint => hint.type === hintType)
      .map(hint => <Hint text={hint.text} />);
  };
};

export default CurrentHint;
