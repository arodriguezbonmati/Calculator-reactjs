import React from "react";

import "./Styles.css";

const keyboardBasic = props => {
  const { basicMode } = props.state;
  return (
    <div className="keyboard">
      <div className="keyboard_basic">
        <div className="keyboard_basic_top">
          <div className="key_lightgrey" onClick={() => props.deleteNumber()}>
            ←
          </div>
          <div className="key_lightgrey" onClick={() => props.restart()}>
            AC
          </div>
          <div className="key_orange" onClick={() => props.onKeyClick("/")}>
            /
          </div>
          <div className="key_orange" onClick={() => props.onKeyClick("*")}>
            *
          </div>
          <div className="key_darkgrey" onClick={() => props.onKeyClick("7")}>
            7
          </div>
          <div className="key_darkgrey" onClick={() => props.onKeyClick("8")}>
            8
          </div>
          <div className="key_darkgrey" onClick={() => props.onKeyClick("9")}>
            9
          </div>
          <div className="key_orange" onClick={() => props.onKeyClick("-")}>
            -
          </div>
          <div className="key_darkgrey" onClick={() => props.onKeyClick("4")}>
            4
          </div>
          <div className="key_darkgrey" onClick={() => props.onKeyClick("5")}>
            5
          </div>
          <div className="key_darkgrey" onClick={() => props.onKeyClick("6")}>
            6
          </div>
          <div className="key_orange" onClick={() => props.onKeyClick("+")}>
            +
          </div>
        </div>
        <div className="keyboard_basic_bottom">
          <div className="bottom_left">
            <div className="key_darkgrey" onClick={() => props.onKeyClick("1")}>
              1
            </div>
            <div className="key_darkgrey" onClick={() => props.onKeyClick("2")}>
              2
            </div>
            <div className="key_darkgrey" onClick={() => props.onKeyClick("3")}>
              3
            </div>
            <div className="keyLong_darkgrey" onClick={() => props.onKeyClick("0")}>
              0
            </div>
            <div className="key_darkgrey" onClick={() => props.onKeyClick(".")}>
              .
            </div>
          </div>
          <div className="bottom_right">
            <div className="keyLong_orange" onClick={() => props.result()}>
              =
            </div>
          </div>
        </div>
      </div>
      {basicMode ? null : (
        <div className="keyboard_advanced_hide">
          <div className="key_black" onClick={() => props.onKeyClick("sin(")}>
            sin
          </div>
          <div className="key_black" onClick={() => props.onKeyClick("cos(")}>
            cos
          </div>
          <div className="key_black" onClick={() => props.onKeyClick("tan(")}>
            tan
          </div>
          <div className="key_black" onClick={() => props.onKeyClick("(")}>
            (
          </div>
          <div className="key_black" onClick={() => props.onKeyClick(")")}>
            )
          </div>
        </div>
      )}
    </div>
  );
};

export default keyboardBasic;
