import { useState } from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTodo,
  deleteTodo,
  fetchTodos,
  updateTodo,
} from "./redux/features/todolistSlice";

function App() {
  const [inputText, setText] = useState();
  const [boolean, setBoolean] = useState(true);
  const [todoIndex, setTodoIndex] = useState(null);
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todolist.todos);
  const product = useSelector((state) => state.todolist.product);

  console.log(product);

  function handleEdit(index) {
    setText(todoData[index]);
    setTodoIndex(index);
    setBoolean(false);
  }
  function handleUpdate() {
    dispatch(updateTodo({ id: todoIndex, updateText: inputText }));
    setBoolean(true);
    setText("");
  }

  function handleAdd() {
    dispatch(AddTodo(inputText));
    setText("");
  }
  function handleDelete(index) {
    dispatch(deleteTodo(index));
  }
  return (
    <>
      <h1>Todolist</h1>
      <button
        onClick={() => {
          dispatch(fetchTodos());
        }}
      >
        fetch product
      </button>

      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      {boolean ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      <div>
        {todoData &&
          todoData.map((todo, index) => {
            return (
              <div key={index}>
                <p>{todo}</p>
                <button
                  onClick={() => {
                    handleEdit(index);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  delete
                </button>
              </div>
            );
          })}
      </div>
      <div>
        {product &&
          product.map((data) => {
            return <p key={data.id}>{data.title}</p>;
          })}
      </div>
    </>
  );
}

export default App;
