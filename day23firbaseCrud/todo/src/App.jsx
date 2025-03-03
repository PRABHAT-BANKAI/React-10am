import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
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
  }
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
              <button>Delete</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
