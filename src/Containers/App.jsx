import React, { Component } from "react";
import cloneDeep from "clone-deep";
import { evaluate } from "mathjs";

import "./App.css";
import Keyboard from "../Components/Keyboard";
import Display from "../Components/Display";
import Switch from "../Components/Switch";

class App extends Component {
  state = {
    operand: "",
    result: "",
    history: [],
    showResult: false,
    basicMode: true,
    max: 3,
    min: 0
  };

  historyClick = pressedOp => {
    let clonedState = cloneDeep(this.state);
    clonedState.operand = pressedOp;
    clonedState.showResult = false;
    this.setState({ operand: clonedState.operand, showResult: clonedState.showResult });
  };

  arrowClick = pressedArrow => {
    let clonedState = cloneDeep(this.state);
    if (pressedArrow === "Up") {
      clonedState.max++;
      clonedState.min++;
    } else {
      if (pressedArrow === "Down") {
        if (clonedState.min > 0) {
          clonedState.max--;
          clonedState.min--;
        }
      }
    }
    this.setState({ max: clonedState.max, min: clonedState.min });
  };

  mode = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.basicMode = !clonedState.basicMode;
    this.setState({ basicMode: clonedState.basicMode });
  };

  operations = pressedKey => {
    let clonedState = cloneDeep(this.state);
    clonedState.showResult = false;
    this.setState({ showResult: clonedState.showResult });
    clonedState.operand = clonedState.operand + pressedKey;
    this.setState({ operand: clonedState.operand });
  };

  eval = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.result = evaluate(clonedState.operand);
    this.setState({ result: clonedState.result });
    clonedState.showResult = true;
    this.setState({ showResult: clonedState.showResult });
    clonedState.history.unshift(clonedState.operand, clonedState.result);
    this.setState({ history: clonedState.history });
    clonedState.operand = "";
    this.setState({ operand: clonedState.operand });
  };

  delete = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.operand = clonedState.operand.slice(0, -1);
    this.setState({ operand: clonedState.operand });
  };

  restart = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.operand = "";
    this.setState({ operand: clonedState.operand });
    clonedState.result = "";
    this.setState({ result: clonedState.result });
  };

  render() {
    return (
      <div className="App">
        <div
          className={
            this.state.basicMode ? "calculator" : "calculator_advanced"
          }
        >
          <div className="switchDisplay">
            <span className="type">Advanced mode</span>
            <Switch switchMode={this.mode} />
          </div>
          <div className="displayContainer">
            <Display
              state={this.state}
              pressArrow={this.arrowClick}
              clickHistory={this.historyClick}
            />
          </div>
          <div className="keyboardContainer">
            <Keyboard
              result={this.eval}
              onKeyClick={this.operations}
              deleteNumber={this.delete}
              restart={this.restart}
              state={this.state}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
