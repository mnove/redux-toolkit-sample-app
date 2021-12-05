import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

// Exporting adapter and selector (they will be used in the components)
export const todoAdapter = createEntityAdapter(); // creating an adapter
export const todoSelectors = todoAdapter.getSelectors((state) => state.todos); // selecting the bit of state that we care about

const todoSlice = createSlice({
  name: "todos",

  // automatically creates an initial state structure (close to a normalized state shape)
  initialState: todoAdapter.getInitialState(),

  // these reducers / actions are automatically created from the createEntityAdapter's todoAdapter.
  // they allow to create simple CRUD ops without actually writing the code for it
  // see here for a list of CRUD functions: https://redux-toolkit.js.org/api/createEntityAdapter#crud-functions
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
