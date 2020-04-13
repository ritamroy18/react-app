import React ,{Component} from 'react';

class Counter extends Component{
    
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    
    increment(){
        // this.state.count= this.state.count+1; //Ui doesn't update
        // console.log(this.state.count);
        this.setState({
            count: this.state.count + 1
        },
        () =>{
            console.log('Callback Value' ,this.state.count)  
            //If you want to render after state change then use callback function 
            }
        )
        console.log(this.state.count);
    }


    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

    render(){
        return(
            <div>
                Count - {this.state.count}
                <button onClick = {()=>this.increment()}>Increment</button>
                {/* <button onClick = {()=>this.incrementFive()}>Increment</button> */}


            </div>
        )
    }

}

export default Counter