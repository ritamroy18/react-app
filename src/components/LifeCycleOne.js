import React, { Component } from 'react'
import LifeCycleTwo from './LifeCycleTwo'

export class LifeCycleOne extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : 'DX'

        }
        console.log('LifeCycleOne Constructor')

    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleOne getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleOne componentDidMount')
    }
    //Update Life Cycle mehod
    shouldComponentUpdate(){
        console.log('LifeCycleOne shouldComponentUpdate')
        return true
    }

    componentDidUpdate(){
        console.log('LifeCycleOne componentDidUpdate')

    }


    changeState= () =>{
        this.setState({
            name : 'Codeev'
        })
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleOne getSnapshotBeforeUpdate')
        return null

    }
    
    render() {
        console.log('LifeCycleOne render')
        return (
            <div>
              <div>LifeCycleOne render </div> 
              <button onClick = {this.changeState}>Change State</button>
              <LifeCycleTwo/>
            </div>
        )
    }
}


export default LifeCycleOne
