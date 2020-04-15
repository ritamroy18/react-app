import React ,{Component} from 'react';
//Class Component
//Props Implement
class Welcome extends Component{
 render(){
    //  const {name, heroname} =  this.props;  //destructuring props in class componenet
    // const {state1,state2} = this.state    //destructuring state in class componenet
  //  return <h1> Class Component </h1>
  return <h1> Welcome {this.props.name} a.k.a {this.props.heroname} </h1>
//   return <h1> Welcome {name} a.k.a {heroname} </h1>//destructuring props in class componenet

 }
}

export default Welcome
