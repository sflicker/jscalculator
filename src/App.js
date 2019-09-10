import React, {Component} from 'react';
import Total from './components/Total';
import CalcButtons from './components/CalcButtons';
import SimpleLayout from './calclayouts/SimpleLayout';
import uuid from 'uuid';

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

    let buttons=[];

    for (var i=0;i<=9;i++) {
      buttons.push( {btn: {id: uuid.v4(), value: i}} );
    };
    buttons.push({btn: {id: uuid.v4(), value: "+"}} );
    buttons.push({btn: {id: uuid.v4(), value: "-"}} );
    buttons.push({btn: {id: uuid.v4(), value: "*"}} );
    buttons.push({btn: {id: uuid.v4(), value: "/"}} );
    buttons.push({btn: {id: uuid.v4(), value: "."}} );
    buttons.push({btn: {id: uuid.v4(), value: "="}} );
    buttons.push({btn: {id: uuid.v4(), value: 'C'}} );
    buttons.push({btn: {id: uuid.v4(), value: 'AC'}} );


    return (
      <div>
        <h1>Calculator</h1>
        <Total total={this.state.currValue} />
        <SimpleLayout></SimpleLayout>
        <CalcButtons onClick={this.onBtnClick} buttons={buttons} />
      </div>
    );
  }
}

export default App;
