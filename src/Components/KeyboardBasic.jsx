import React from "react";

import "./Styles.css";

const keyboardBasic = props => {
  return (
    <div className="keyboard_basic">
      <div className="keyboard_basic_top">
        <div className="key" onClick={() => props.deleteNumber()}>←</div>
        <div className="key" onClick={() => props.restart()}>AC</div>
        <div className="key" onClick={() => props.onKeyClick("/")}>/</div>
        <div className="key" onClick={() => props.onKeyClick("*")}>*</div>
        <div className="key" onClick={() => props.onKeyClick("7")}>7</div>
        <div className="key" onClick={() => props.onKeyClick("8")}>8</div>
        <div className="key" onClick={() => props.onKeyClick("9")}>9</div>
        <div className="key" onClick={() => props.onKeyClick("-")}>-</div>
        <div className="key" onClick={() => props.onKeyClick("4")}>4</div>
        <div className="key" onClick={() => props.onKeyClick("5")}>5</div>
        <div className="key" onClick={() => props.onKeyClick("6")}>6</div>
        <div className="key" onClick={() => props.onKeyClick("+")}>+</div>
      </div>
      <div className="keyboard_basic_bottom">
        <div className="bottom_left">
          <div className="key" onClick={() => props.onKeyClick("1")}>1</div>
          <div className="key" onClick={() => props.onKeyClick("2")}>2</div>
          <div className="key" onClick={() => props.onKeyClick("3")}>3</div>
          <div className="keyLong" onClick={() => props.onKeyClick("0")}>0</div>
          <div className="key" onClick={() => props.onKeyClick(".")}>.</div>
        </div>
        <div className="bottom_right">
        <div className="keyLong" onClick={() => props.result()}>=</div>
        </div>
      </div>
    </div>
  );
};

export default keyboardBasic;