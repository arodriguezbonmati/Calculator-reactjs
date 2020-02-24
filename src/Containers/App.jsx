import React, { Component } from 'react';
import './App.css';
import KeyboardBasic from '../Components/KeyboardBasic';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="calculator">
          <div className="keyboard">
            <KeyboardBasic

            />
          </div>
        </div>
      </div>
    )
  }
}

export default App;