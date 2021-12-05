import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodos } from "../../store/todoSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddTodo = () => {
  // Redux Hooks
  const dispatch = useDispatch();

  // Local state hooks
  const [text, setText] = useState("");

  const submitTodo = () => {
    if (text.length > 0) {
      const items = text.split(",");
      dispatch(
        addTodos(
          items.map((item) => ({ id: nanoid(), text: item, completed: false }))
        )
      );
    }
  };

  return (
    <>
      <div className="add-todo">
        <p>Add multiple todos</p>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button onClick={submitTodo}>Add todo</button>
      </div>
    </>
  );
};
