import React from "react";

import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../../store/todoSlice";

export const Todo = ({ text, completed, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(
      updateTodo({
        id: id,
        changes: { completed: !completed },
      })
    );
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <>
      <div className="todo">
        <input type="checkbox" value={completed} onChange={handleToggle} />
        <span>{text}</span>
        <button onClick={handleDeleteTodo}>X</button>
      </div>
    </>
  );
};
