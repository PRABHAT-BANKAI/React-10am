import React, { useMemo, useState } from "react";

const Memo = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [count, setCount] = useState(0);

  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return Number(num1) + Number(num2);
  },[num1,num2]);

  console.log("rendering ...");
  return (
    <div>
      <input
        type="text"
        placeholder="Number 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Number 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br />

      {sum}
      <p>Count :{count}</p>
      <button onClick={() => setCount(count + 1)}> inc</button>
    </div>
  );
};

export default Memo;
