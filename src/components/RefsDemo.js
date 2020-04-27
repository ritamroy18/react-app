import React, { Component } from 'react'

 class RefsDemo extends Component {
     constructor(props) {
         super(props)
        this.inputRef = React.createRef()
     }
     
     componentDidMount(){
         this.inputRef.current.focus()
        //  console.log(this.inputRef ,'ref')
     }

     clickHandler = () => {
         alert(this.inputRef.current.value)
     }
    render() {
        return (
            <div>
                {/* <h2>Render Refs Component</h2> */}
             <input type = "text" ref ={this.inputRef} />   
             <button onClick = {this.clickHandler}>Click Refs </button>
            </div>
        )
    }
}

export default RefsDemo
