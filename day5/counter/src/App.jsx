import { useState } from "react";

import "./App.css";
import Product from "./components/Product";

function App() {
  // const [count, setCount] = useState(0);

  // const handleInc = () => {
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  //   setCount((prev) => {
  //     return prev + 1;
  //   });
  // };

  return (
    <>
      {/* <h1>count:{count}</h1>
      <button onClick={handleInc}>Inc</button>
      <button
        disabled={count === 0 ? true : false}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        dec
      </button> */}

      <Product/>
    </>
  );
}

export default App;
