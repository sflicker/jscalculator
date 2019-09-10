import React, { Component } from 'react'
import CalcButton from './CalcButton';

class CalcButtons extends Component {
    render() {
        return (
            <div>
                {this.props.buttons.map((button) => (
                    <CalcButton onClick={this.props.onClick} settings={button} />
                )) }
            </div>
        )
    }
}

export default CalcButtons
