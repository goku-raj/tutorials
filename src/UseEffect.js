import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [clicked, setClicked] = useState();
    const[count, setCount] = useState(0)

    useEffect(()=>{
        console.log('in use state')
    },[ clicked,count ])
  return (
    <div>
      <button onClick={()=>setClicked('HELLO')}>HELLO</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked('ME')}>ME</button>
      <br/>
      <hr/>
      <button onClick={()=>setClicked('GOKU')}>GOKU</button>
      <h1>{clicked}</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>{count}</h2>
    </div>
  )
}

export default UseEffect