import React from "react";

import "./Styles.css";

const Switch = props => {
  return (
    <div className="mid">
      <label className="rocker rocker-small">
        <input type="checkbox" onClick={() => props.switchMode()} />
        <span className="switch-left">On</span>
        <span className="switch-right">Off</span>
      </label>
    </div>
  );
};

export default Switch;
