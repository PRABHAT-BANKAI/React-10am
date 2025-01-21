import React, { useState } from "react";

const Controlled = () => {
  const [text, setText] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    console.log(text)
    setText("");
  }
  return (
    <div>
      <h1>controlled Component</h1>
      <form onSubmit={handleSubmit} action="">
        Email:{" "}
        <input
          type="email"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Controlled;
