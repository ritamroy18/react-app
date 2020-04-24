import React from 'react'

function ChildComponent(props) {
    return (
        <div>
         {/* DATA PASS FROM PARENT TO CHILD as props BELOW */}

           {/* <button onClick = {props.greetHandler}>Greet Parent </button>  */}

           {/* DATA PASS FROM CHILD TOPARENT BELOW */}
           <button onClick = {()=> props.greetHandler('child')}>Greet Parent </button> 

        </div>
    )
}

export default ChildComponent
