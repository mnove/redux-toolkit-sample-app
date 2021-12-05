import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const todoAdapter = createEntityAdapter();
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos);

const todoSlice = createSlice({
  name: "todos",
  initialState: todoAdapter.getInitialState(),
  reducers: {
    addTodo: todoAdapter.addOne,
    addTodos: todoAdapter.addMany,
    deleteTodo: todoAdapter.removeOne,
    clearTodos: todoAdapter.removeAll,
    updateTodo: todoAdapter.updateOne,
  },
});

export const { addTodo, addTodos, deleteTodo, clearTodos, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
