import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";

function MultiCounter(props){

    const[counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);
    }

    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize = {counterSize}></CounterGroup>
            <div id="bottomCounter">Size : {counterSize}</div>
        </div>
    );
}

export default MultiCounter;