import React, { Component } from 'react'

export class classClick extends Component {
     clickHandler(){
        console.log('Button Clicked');
    }

    render() {
        return (
            <div>
            <button onClick = {this.clickHandler}>Class Click</button>
            </div>
        )
    }
}

export default classClick
