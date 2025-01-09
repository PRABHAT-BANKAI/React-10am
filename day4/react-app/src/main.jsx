import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App"
// let element = <h1>hello world from react</h1>
createRoot(document.getElementById("root")).render(<App/>);

// jsx(javascript XML)  babel transpiler  {}


// let object = {
//   name:"batman",
//   age:30,
//   city:"Gotham"
// }

// const {name,age,cities}= object
// console.log(city)