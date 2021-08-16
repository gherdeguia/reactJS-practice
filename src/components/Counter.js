import React, { useState } from "react"
import '../CSS/counter.css';

function Counter(){

    const [number,setNumber] = useState(0);

    function increaseNumber(){
        setNumber(number+1);
    }

    function decreaseNumber(){
        if(number > 0){
            setNumber(number-1);
        }else{
            setNumber(0);
        }
    }

    return(
            <div className="counter">
                <button id="increment" onClick={increaseNumber}>+</button>
                <span className="numbers">{number}</span>
                <button id="decrement" onClick={decreaseNumber}>-</button>
            </div>
    );
    
}
export default Counter;