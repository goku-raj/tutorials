import React, { useState } from 'react'
import NewComp from './NewComp';

const Memo = () => {
    const [count, setCount] = useState(0);
    const[input , setInput] = useState('')
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
      <input onChange={(e)=>setInput(e.target.value)}></input>
      <p>Input: {input}</p>
      <br/>
      <hr/>
      This is a memo component. It will not re-render unless the props change or state changes
      <NewComp newCount = {count}/>
    </div>
  )
}

export default Memo
