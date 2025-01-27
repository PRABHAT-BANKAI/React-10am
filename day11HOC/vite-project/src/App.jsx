import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import DisplayData from "./components/DisplayData";
import HOC from "./components/HOC";

function App() {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);


  const EnhancedComponent = HOC(DisplayData)
  useEffect(() => {
    setTimeout(() => {
      setData(["item1", "item2", "item3", "item4"]);
      setLoading(false);
    }, 3000);
  });

  return (
    <>
      <h1>react</h1>
      <EnhancedComponent isLoading={isloading}  data={data}/>
     
    </>
  );
}

export default App;
