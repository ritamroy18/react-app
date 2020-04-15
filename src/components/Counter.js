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
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () =>{
        //     console.log('Callback Value' ,this.state.count)  

        //     //If you want to render after state change then use callback function 
        // code has to be executed after the state has been updated..placethat code in the callback function which is the second argument of the setstate method
        //     }
        // )
        this.setState((prevState) => ({   ////when to update state depends on previous state
            count :prevState.count +1     ///pass in a function as an argument instead of                                    regular object
        }))
        console.log(this.state.count);
    }


    incrementFive(){                  //Multiple state count
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
                {/* <button onClick = {()=>this.increment()}>Increment</button> */}
                <button onClick = {()=>this.incrementFive()}>Increment</button>


            </div>
        )
    }

}

export default Counter