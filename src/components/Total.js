import React, { Component } from 'react'

export class Total extends Component {
    render() {
        console.log("Total " + this.props.total);
        return (
            <div>
                <input type="text" value={this.props.total} />
            </div>
        )
    }
}

export default Total
