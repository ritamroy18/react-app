import React ,{Component} from 'react';
//Class Component
//Props Implement
class Welcome extends Component{
 render(){
  //  return <h1> Class Component </h1>
  return <h1> Welcome {this.props.name} a.k.a {this.props.heroname} </h1>

 }
}

export default Welcome
