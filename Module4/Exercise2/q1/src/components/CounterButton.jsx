import {useState} from 'react';
import "./CounterButton.css"
function CounterButton(){

    const [count,counter] =useState(0)

    let incrementCounter=()=>{
        counter(count+1);
    }

    return(
        <div className="container">
            <button onClick={ incrementCounter}>
                Counter
            </button>

            <p id="display">
                {count}
            </p>
        </div>
    );
}

export default CounterButton;