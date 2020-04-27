import React, { Component } from 'react'
import PureComp from './PureComp';
import RegComp from './RegComp';
// import MemoComp from './MemoComp';

export class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            name:'Ritam'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Ritam'
            })
        }, 2000);
    }
    
    render() {
        return (
            <div>
                <h2>Parent Component</h2>
                <RegComp name ={this.state.name}></RegComp>
                <PureComp name ={this.state.name}></PureComp>
                {/* <MemoComp name ={this.state.name}></MemoComp> */}
            </div> 
        )
    }
}

export default ParentComp
