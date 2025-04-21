import React, {useState, useEffect} from 'react'

const UseEffectCounter = () => {
    const [count, setCount] = useState(0);
    useEffect( ()=> {
        console.log("Count 1 effect");
        document.title = count;
    },[count]
);
const [count2, setCount2] = useState(0);
    useEffect( ()=> {
        console.log("Count 2 effect");
        document.title = count2;
    },[count2]
);
  return (
    <div>
        <button style={{margin:"10px auto", padding: "5px"}} onClick= {()=> setCount(count => count + 1)}>Increment Count</button>
        <button style={{margin:"10px auto", padding: "5px"}} onClick= {()=> setCount2(count2 => count2 + 1)}>Increment Count 2</button>
    </div>
  )
}

export default UseEffectCounter;


