import React, { useRef } from "react";

const Uncontrolled = () => {
  const inputText = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputText.current.value);
  }
  return (
    <div>
      <h1>Uncontrolled Component</h1>
      <form onSubmit={handleSubmit} action="">
        Email: <input ref={inputText} type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Uncontrolled;
