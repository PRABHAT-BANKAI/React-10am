import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <>
      <h1>Crud with Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
