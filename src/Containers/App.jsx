import React, { Component } from "react";
import cloneDeep from "clone-deep"
import "./App.css";
import KeyboardBasic from "../Components/KeyboardBasic";
import Display from "../Components/Display";

class App extends Component {
  state = {
    operand: "",
    result: "",
    showResult: false
  };

  operations = pressedKey => {
    let clonedState = cloneDeep(this.state);
    clonedState.showResult = false;
    this.setState({showResult: clonedState.showResult})
    clonedState.operand = clonedState.operand + pressedKey;

    this.setState({operand: clonedState.operand})
  };
 
  eval = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.result = eval(clonedState.operand);
    clonedState.operand = "";
    this.setState({operand: clonedState.operand});
    this.setState({result: clonedState.result});
    clonedState.showResult = true;
    this.setState({showResult: clonedState.showResult})
  }

  delete = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.operand = clonedState.operand.slice(0, -1);
    this.setState({operand: clonedState.operand});
  }

  restart = () => {
    let clonedState = cloneDeep(this.state);
    clonedState.operand = "";
    this.setState({operand: clonedState.operand});
  }

  

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="displayContainer">
            <Display 
              state={this.state}
            />
          </div>
          <div className="keyboard">
            <KeyboardBasic
              result={this.eval} 
              onKeyClick={this.operations}
              deleteNumber={this.delete}
              restart={this.restart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
