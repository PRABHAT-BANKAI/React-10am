import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "./config/firbase";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todolist, setTodolist] = useState([]);
  const [boolean, setBoolean] = useState(false);
  const [editId, setEditId] = useState("");

  const database = collection(db, "todolist");

  async function handleAdd() {
    if (!inputText.trim()) {
      alert("Please enter your first field");
      return;
    }
    await addDoc(database, { todo: inputText });
    alert("your todo add successfully");
    setInputText("");
    const getTodos = await getDocs(database);
    setTodolist(
      getTodos.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }

  async function hanldeDelete(id) {
    console.log(id);
    const DeleteValue = doc(database,  id);
    await deleteDoc(DeleteValue);

    setTodolist((prev) => prev.filter((doc) => doc.id != id));
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const getTodos = await getDocs(database);

    setTodolist(
      getTodos.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    );
  }
  console.log(todolist);
  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      {boolean ? (
        <button>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}

      <div>
        {todolist &&
          todolist.map((item) => (
            <div key={item.id}>
              <p>{item.todo}</p>
              <button>Edit</button>
              <button
                onClick={() => {
                  hanldeDelete(item.id);
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
