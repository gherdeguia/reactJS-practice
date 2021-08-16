import { useState } from "react";

function CounterSizeGenerator(props){

    const [size,setSize] = useState(0);

    function handleChangeSize(event){
        console.log(event.target.value, typeof(event.target.value));
        setSize(parseInt(event.target.value));
        props.updateCounterSize(parseInt(event.target.value));
    }

    return(
        <div className="headers">
            <span>Size: &nbsp;</span>
            <input type="number" min="0" value={size} onChange={handleChangeSize}/>
        </div>
    );

}

export default CounterSizeGenerator;