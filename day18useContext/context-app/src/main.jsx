import { createContext, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { contextName } from "./context/context.js";

const globalValue = {
  name: "John Doe",
  age: 30,
  address: "123 Main St",
  email: "johndoe@example.com",
  phone: "123-456-7890",
  hobbies: ["reading", "painting", "cooking"],
}

createRoot(document.getElementById("root")).render(
  <contextName.Provider value={globalValue}>
    <App />
  </contextName.Provider>
);
