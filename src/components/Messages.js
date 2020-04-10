import React ,{Component} from 'react';
//Class Component
//State implement
class Messages extends Component{
   constructor(){
       super()
       this.state = {
           messages : 'Hello React State'
       }
   } 
   changeMessage(){
       this.setState({
           messages : 'Thanks for subscribe'
       })
   }
 render(){
//    return <h1> State Change </h1>
  return (
      <div>
          <h1> 
          {this.state.messages}
           </h1>
           <button onClick = {()=>this.changeMessage()}>Subscribe</button>
          </div>
  )

 }
}

export default Messages
