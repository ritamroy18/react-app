import React from 'react';

//Functional Components

//Props Implement

// function Greet(){
//  return <h1> HI! Ritam </h1>
// }
//const Greet = () => <h1> Hi! Ritam </h1>

// const Greet = (props) => {
//     console.log(props);
// return(
//     <h1>Hi Ritam</h1>
{/* <h1>Hi {props.name}</h1> */}
// )
// }



const Greet = props => {
    return (
        <div>
            <h1> Hi! {props.name} a.k.a {props.heroname}</h1>
            {props.children}
        </div>
    )
}

export default Greet