import React, { Component } from 'react'

export class CalcButton extends Component {


    render() {
        const {id, value} = this.props.settings.btn; 
        return (
            <div>
                <button type="button" 
                        onClick={this.props.onClick.bind(this, value)}
                        name={value} value={value} >{value}</button>
            </div>
        )
    }
}

export default CalcButton
