import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [array, setArray] = useState(); // hook of react

  const handleClick = () => {
    setArray(["item1", "item2", "item3"]);
  };

  useEffect(() => {
    console.log("useEffect");
  });
  console.log("1");
  return (
    <React.Fragment>
      <h1>react</h1>
      <button onClick={handleClick}>Click Me</button>

      <ul>
        {array &&
          array.map((element, index) => {
            return <li key={index}>{element}</li>;
          })}
      </ul>
    </React.Fragment>
  );
}

export default App;
