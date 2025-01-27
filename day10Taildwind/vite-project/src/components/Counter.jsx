import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("counter")) || 0
  );

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  });

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
