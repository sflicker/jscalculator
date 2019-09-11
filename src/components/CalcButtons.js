import React, { Component } from 'react'
import CalcButton from './CalcButton';

const makeButtonRow = (button_row, onClick) => {
    console.log("makeButtonRow");
    console.log("button_row.length=" + button_row.length);
    return button_row.map((button) => (
            <div>
                <CalcButton onClick={onClick} settings={button} />
            </div>
    ));
}

class CalcButtons extends Component {
    render() {
        return (
            <div>
                {this.props.buttons.map((button_row) => (
                    <div class="calculator-row">
                        {makeButtonRow(button_row, this.props.onClick)}
                    </div>
                )) }
            </div>
        )
    }
}

export default CalcButtons
