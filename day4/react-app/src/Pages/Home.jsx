import React, { useState } from "react";
import Navbar from "../components/navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import "./Home.css";

// props is a sort form of properties {color:"aqua"}
const Home = () => {
  const [count, setCount] = useState(5);
  return (
    <>
      <Navbar count={count} color={"red"} backgroundColor={"aqua"} />
      <Navbar count={count} color={"yellow"} backgroundColor={"green"} />
      {/* <h1>Home page</h1> */}
      <Section count={count} />
      <Footer count={count} />
      <button
        onClick={() => {
          setCount(count+1);
        }}
      >
        counter inc 2
      </button>
    </>
  );
};

export default Home;
