import React, { Component } from 'react'

export class LifeCycleTwo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name : 'DX'

        }
        console.log('LifeCycleTwo Constructor')

    }
    
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleTwo getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleTwo componentDidMount')
    }

        //Update Life Cycle mehod
        shouldComponentUpdate(){
            console.log('LifeCycleTwo shouldComponentUpdate')
            return true
        }
    
        componentDidUpdate(){
            console.log('LifeCycleTwo componentDidUpdate')
    
        }
    
        getSnapshotBeforeUpdate(prevProps,prevState){
            console.log('LifeCycleTwo getSnapshotBeforeUpdate')
            return null
    
        }
    
    render() {
        console.log('LifeCycleTwo render')
        return (
            <div>
              LifeCycleTwo render  
            </div>
        )
    }
}


export default LifeCycleTwo
