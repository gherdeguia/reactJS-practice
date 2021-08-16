import Counter from "./Counter";

function CounterGroup(props){

    function generateCounterList(){
        return new Array(props.counterSize).fill(Date.now);
    }

    const counterList = generateCounterList();
    return(
        <div className="countergroup">
            {
                counterList.map((item,index)=>(
                    <Counter key={item+index}></Counter>
                ))
            }
        </div>
    );
    
}

export default CounterGroup;