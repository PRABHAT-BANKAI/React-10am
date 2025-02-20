import React from "react";
import { useReducer } from "react";

const App = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return {
          count: state.count + 1,
        };

      case "decrement":
        return {
          count: state.count - 1,
        };
      default:
        return state;
    }
  }
  return (
    <div>
      <h1>Use reducer</h1>
      <p>Count: {state.count}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        disabled={state.count == 0}
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
    </div>
  );
};

export default App;
