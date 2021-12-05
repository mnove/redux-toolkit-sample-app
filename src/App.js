import "./App.css";
import { AddTodo } from "./components/AddTodo/AddTodo";
import { TodoList } from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>TODO App</h1>
        <h2>Redux Toolkit - createEntityAdapter</h2>
      </header>

      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
