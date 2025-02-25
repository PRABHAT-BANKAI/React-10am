import React, { useCallback, useState } from "react";
import Child from "./Child";

const Callback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClick1 = () => {
    console.log("handleClick1");
    setCount1(count1 + 1);
  };
  const handleClick2 = useCallback(() => {
    console.log("handleClick2");
    setCount2(count2 + 1);
  },[count2]);

  console.log("Callback Component render ...");
  return (
    <div>
      <h1>Parent </h1>
      <p>Count1: {count1}</p>
      <button onClick={handleClick1}>inc1</button>
      <p>Count 2: {count2}</p>
      <Child handleClick2={handleClick2} />
    </div>
  );
};

export default Callback;
