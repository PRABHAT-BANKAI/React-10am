import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Controlled from "./components/Controlled";
import Uncontrolled from "./components/Uncontrolled";

function App() {
  return (
    <React.Fragment>
      <Controlled />
      {/* <Uncontrolled /> */}
    </React.Fragment>
  );
}

export default App;
