import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  addTodos,
  clearTodos,
  todoSelectors,
} from "../../store/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Todo } from "./Todo";

export const TodoList = () => {
  //   // Redux Hooks
  //   const dispatch = useDispatch();
  //   // Local state hooks
  //   const [text, setText] = useState("");

  //   const submitTodo = () => {
  //     if (text.length > 0) {
  //       const items = text.split(",");
  //       //   items.forEach((item) => {
  //       //     dispatch(addTodo({ id: nanoid(), text: item, completed: false }));
  //       //   });

  //       dispatch(
  //         addTodos(
  //           items.map((item) => ({ id: nanoid(), text: item, completed: false }))
  //         )
  //       );
  //     }
  //   };

  const allTodos = useSelector(todoSelectors.selectEntities);
  const todoCount = useSelector(todoSelectors.selectTotal);
  const dispatch = useDispatch();

  const todoList = [];
  for (const id in allTodos) {
    if (Object.hasOwnProperty.call(allTodos, id)) {
      const todoItem = allTodos[id];
      todoList.push(
        <Todo
          key={todoItem.id}
          id={todoItem.id}
          completed={todoItem.completed}
          text={todoItem.text}
        />
      );
    }
  }

  const handleClearAll = () => {
    dispatch(clearTodos());
  };

  return (
    <>
      <div className="todo-list">
        <h3>Todos: </h3>
        <h4>Count: {todoCount}</h4>
        <button className="delete-btn" onClick={handleClearAll}>
          Clear all
        </button>
        <div>{todoList}</div>
      </div>
    </>
  );
};
