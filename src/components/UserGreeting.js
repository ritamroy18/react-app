import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        // Process 1 conditional oeartor
        // if(this.state.isLoggedIn)
        // return <div>Welcome Guest</div>
        // else return <div>Welcome Ritam</div>
        // Process 2 conditional oeartor

        return this.state.isLoggedIn? (
            <div>Welcome Ritam</div>
        ):(<div>Welcome Guest</div>)

        
    }
}

export default UserGreeting
