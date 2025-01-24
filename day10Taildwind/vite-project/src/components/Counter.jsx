import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState();

  useEffect(() => {
    localStorage.setItem("counter", count);
  });

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
