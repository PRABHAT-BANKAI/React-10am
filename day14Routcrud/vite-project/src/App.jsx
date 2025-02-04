import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  return (
    <>
      <h1>Crud with Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addData" element={<Create />} />
        <Route path="/read/:id" element={<Read />} />
      </Routes>
    </>
  );
}

export default App;
