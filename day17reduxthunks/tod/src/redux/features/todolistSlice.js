import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: {
    todos: JSON.parse(localStorage.getItem("todolistData")) || [],
    product: [],
    status: false,
  },
  reducers: {
    AddTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
      localStorage.setItem("todolistData", JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo, i) =>
        i === action.payload.id ? action.payload.updateText : todo
      );
      localStorage.setItem("todolistData", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo, i) => i !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.product = action.payload;
        console.log(state.product);
        state.status = false;
      }).addCase(fetchTodos.rejected, (state, action) => {
        console.log("Error:", action.error.message);
        state.status = false;
      })
  },
});

// Action creators are generated for each case reducer function

export const { AddTodo, deleteTodo, updateTodo } = todolistSlice.actions;
//todolist reducer
export default todolistSlice.reducer;
