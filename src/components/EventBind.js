import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }

        this.clickHandler = this.clickHandler.bind(this)   //binding is better in constructor
    }
    

    // clickHandler(){
    //     this.setState({
    //         message : 'This is demo '
    //     })
    //     console.log(this);
    // }

    clickHandler(){
        this.setState({
            message : 'This is demo '
        })
        console.log(this);
    }
//this keyword is undefined in eventhadler ..for that reason event binding is necessary in class component
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
            {/* <button onClick = {this.clickHandler.bind(this)}>EventBind Click</button> */}
            {/* <button onClick = {()=>this.clickHandler()}>EventBind Click</button> */}
            {/* <button onClick = {()=>this.clickHandler}>EventBind Click</button> */}  
            <button onClick = {this.clickHandler}>EventBind Click</button>
{/*react approaches 3rd and 4th ..2nd method is simple*/}  
            </div>
        )
    }
}

export default EventBind
