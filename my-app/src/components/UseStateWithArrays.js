import React from 'react'
import { useState } from 'react'

const UseStateWithArrays = () => {

    const [nums, setNums] = useState([1,2,3]);
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }

    const removeNums = () => {
        setNums( 
            nums.filter((item, index) => {
            
            return index !== nums.length - 1;
        }));
    } 

  return (
    <div>
        <button onClick={addNums}>Add Item</button>
        <button onClick={removeNums}>Remove Item</button>
        <ul style={{ width: '100px', margin: '0 auto', listStyleType: 'none', padding: 0 }}>
            {nums.map(num => <li style={{border: "solid 1px red", padding: "10px", margin:"5px 0"}} key={num}>{num}</li>)}
        </ul>
    </div>
  )
}


export default UseStateWithArrays;

