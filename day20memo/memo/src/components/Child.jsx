import React, { memo } from "react";

const Child = ({ handleClick2 }) => {
  console.log("Child component rendered");
  return (
    <div>
      <h2>Child</h2>
      <button onClick={handleClick2}> inc 2</button>
    </div>
  );
};

export default memo(Child) ;
