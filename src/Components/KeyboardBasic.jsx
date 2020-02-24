import React from "react";

import "./Styles.css";

const keyboardBasic = props => {
  return (
    <div className="keyboard_basic">
      <div className="keyboard_basic_top">
        <div className="key">←</div>
        <div className="key"> </div>
        <div className="key">/</div>
        <div className="key">*</div>
        <div className="key">7</div>
        <div className="key">8</div>
        <div className="key">9</div>
        <div className="key">-</div>
        <div className="key">4</div>
        <div className="key">5</div>
        <div className="key">6</div>
        <div className="key">+</div>
      </div>
    </div>
  );
};

export default keyboardBasic;