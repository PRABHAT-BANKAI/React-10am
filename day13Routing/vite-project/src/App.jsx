import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
  ]);

  useEffect(() => {
    setTimeout(() => {
      let newData = [...data, "item", "item8", "item9", "item10", "item11"];
      setData(newData);
    }, 5000);
  },[]);
  return (
    <>
      <nav>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About</li>
          </Link>

          <Link to={"/contact"}>
            {" "}
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={<Home userData={data} setUserData={setData} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer>
        <p>Copyright &copy; 2023 My Website</p>
      </footer>
    </>
  );
}

export default App;
