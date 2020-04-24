import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked');
    }
///Event Handler is a funcional not a functional call..dont add () 
    return (
        <div>

            <button onClick = {clickHandler}>Function Click</button>
        </div>
    )
}

export default FunctionClick
