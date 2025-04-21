import React, {useState, useEffect} from 'react'

const UseEffectCounter = () => {
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    useEffect( ()=> {
        console.log("Count 1 effect");
        document.title = count;
    },[count]
);

useEffect( ()=> {
    console.log("Creating timer");
    const interval = setInterval(() => {
        setTime(time => time + 1);
    }, 1000); //happens straight away and is rendered once

},[]);

  return (
    <div>
        <button style={{margin:"10px auto", padding: "5px"}} onClick= {()=> setCount(count => count + 1)}>Increment Count</button>
        <h2 style={{margin:"10px auto", padding: "5px"}}>Time is {time}</h2>
        
    </div>
  )
}

export default UseEffectCounter;


