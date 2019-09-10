import React, { Component } from 'react'

import '../App.css';

export class SimpleLayout extends Component {
    render() {
        return (
            <div class="calculator-row">
                <div >
                    <button name="1" value="1" />
                </div>
                <div >
                    <button name="2" value="2" />
                </div>
                <div >
                    <button name="3" value="3" />
                </div>
            </div>
        )
    }
}

export default SimpleLayout
