import {useState} from 'react';
import "./CounterButton.css"
function IncrementDecrementCounter(){

    const [count,setCount] =useState(0)

    let incrementCounter=()=>{
        setCount(count+1);
    }

    let decrementCounter=()=>{
        setCount(count-1);
    }

    return(
        <div className="container">
            <button onClick={ incrementCounter}>
                Increment
            </button>
            <button id="decrement-btn" onClick={ decrementCounter} disabled={count===0}>
                Decrement
            </button>

            <p id="display">
                {count}
            </p>
        </div>
    );
}

export default IncrementDecrementCounter;