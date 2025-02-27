import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            justifyContent: "space-between",
            backgroundColor:"aqua",
            padding: "10px",
          
          }}
        >
          <li>
            <Link to={"/"}> SignIn</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
