import { configureStore } from "@reduxjs/toolkit";
import todoReducer, { todoAdapter } from "./todoSlice";

// Creating and configuring the main Redux store with Redux Toolkit
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;
