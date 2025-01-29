import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todoData")) || []
  );

  function handleSubmit() {
    // todolist.push(inputText);
    setTodolist([...todolist, inputText]); // [inputText]// [react]// setTodolist ([html,react])//[node,html,react]
    setInputText("");
  }

  function handleDelete(id) {
    let filterData = todolist.filter((element, i) => i != id);// 0!=2 1!=2 2!=2
    setTodolist(filterData);
  }

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <>
      <h1>TodoList</h1>
      <input
        type="text"
        placeholder="enter your task"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>ADD</button>
      {todolist &&
        todolist.map((element, index) => {
          return (
            <div key={index}>
              <p>{element}</p>
              <button
                onClick={() => {
                  handleDelete(index);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </>
  );
}

export default App;
