import React from "react";

import "./Styles.css";

const display = props => {
  const { operand, result, showResult, history, max, min } = props.state;
  return (
    <div className="displayAll">
      <div className="historyContainer">
        <div className="history">
          {history.slice(min, max).map(i => {
            return (
              <span className="historyText" onClick={() => props.clickHistory(i)}>
                {i}
                <br />
              </span>
            );
          })}
        </div>
        <div className="arrows">
          <span className="arrow" onClick={() => props.pressArrow("Up")}>▲</span>
          <span className="arrow" onClick={() => props.pressArrow("Down")}>▼</span>
        </div>
      </div>
      <div className="display">
        <div className="displaySol">
          <span
            className={
              showResult
                ? [result < 0 ? "displayspan_negative" : "displayspan_positive"]
                : "displayspan_normal"
            }
          >
            {" "}
            {showResult === true ? result : operand}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default display;
