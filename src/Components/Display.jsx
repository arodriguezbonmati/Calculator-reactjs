import React from "react";

import "./Styles.css";

const display = props => {
  const { operand, result, showResult } = props.state;
  return (
    <div className="display">
      <span className="displayspan"> {showResult === true ? result : operand} </span>
    </div>
  );
};

export default display;
