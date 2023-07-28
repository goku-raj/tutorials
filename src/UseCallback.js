import React, { useCallback, useMemo, useState } from "react";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const result = useCallback(function slowFunction() {
    let sum = 0;
    for (let i = 0; i <= 1000000000; i++) {
      sum += i;
    }
    console.log("Hey IM a slow Function");
    return sum;
  }, []);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input onChange={(e) => setInput(e.target.value)}></input>
      <p>Input: {input}</p>
      <br />
      <hr />
      <p>sum: {result}</p>
      {console.log(result())}
    </div>
  );
};

export default UseCallback;
