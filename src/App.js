import React, {Component} from 'react';
import Total from './components/Total';
import CalcButtons from './components/CalcButtons';
import SimpleLayout from './calclayouts/SimpleLayout';

import './App.css';

class App extends Component {

  state = {
    prevValue: 0,
    currValue: 0,
    op: '+'
  }

  onBtnClick = (value) => {
    console.log("value=" + value + ", a " + typeof value);
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      this.setState( { op: value, prevValue: this.state.currValue, currValue: 0});
    }
    else if (value === '=' ) {
    
      if (this.state.op === '+') {
        const newTotal = this.state.prevValue + this.state.currValue;
        this.setState( { prevValue: this.state.currValue, currValue: newTotal, op: ''} );
      }
      else if (this.state.op === '-') {
        const newTotal = this.state.prevValue - this.state.currValue;
        this.setState( { prevValue: this.state.currValue, currValue: newTotal, op: ''} );
      }
      else if (this.state.op === '*') {
        const newTotal = this.state.prevValue * this.state.currValue;
        this.setState( { prevValue: this.state.currValue, currValue: newTotal, op: ''} );
      }
      if (this.state.op === '/') {
        const newTotal = this.state.prevValue / this.state.currValue;
        this.setState( { prevValue: this.state.currValue, currValue: newTotal, op: ''} );
      }
    }
    else if (value === 'C' ) {
      this.setState( { prevValue: this.state.prevValue, currValue: 0, op: this.state.op});
    }
    else if (value === 'AC' ) {
      this.setState( { prevValue: 0, currValue: 0, op: ''});
    }
    else {
      const sCurrValue = this.state.currValue.toString();
      const sValue = value.toString();
      const newValue = sCurrValue.concat(sValue);
      this.setState( { currValue: Number(newValue), prevValue: this.state.prevValue, op: this.state.op});
    }
  }
  render() {

    const button_rows=[];

    button_rows.push([
      {btn: {id: "OP_CLEAR", value: 'C'}},
      {btn: {id: "OP_ALL_CLEAR", value: 'AC'}}
     ]);
    button_rows.push( [  
        {btn: {id: "NUM_1", value: "1"}},
        {btn: {id: "NUM_2", value: "2"}},
        {btn: {id: "NUM_3", value: "3"}},
        {btn: {id: "OP_MULTI", value: "*"}}
      ]);
    button_rows.push( [
        {btn: {id: "NUM_4", value: "4"}},
        {btn: {id: "NUM_5", value: "5"}},
        {btn: {id: "NUM_6", value: "6"}},  
        {btn: {id: "OP_DIV", value: "/"}}
      ]);
    button_rows.push( [
        {btn: {id: "NUM_7", value: "7"}},
        {btn: {id: "NUM_8", value: "8"}},
        {btn: {id: "NUM_9", value: "9"}},
        {btn: {id: "OP_SUB", value: "-"}}
    ]);
    button_rows.push( [
      {btn: {id: "NUM_0", value: "0"}},
      {btn: {id: "OP_DECIMAL", value: "."}},
      {btn: {id: "OP_EQUAL", value: "="}},
      {btn: {id: "OP_PLUS", value: "+"}}
     ]);
  
    console.log("button_rows.length=" + button_rows.length);

    return (
      <div>
        <h1>Calculator</h1>
        <Total total={this.state.currValue} />
        <CalcButtons onClick={this.onBtnClick} buttons={button_rows} />
      </div>
    );
  }
}

export default App;
