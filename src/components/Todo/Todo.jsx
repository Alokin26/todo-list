import React, { useState } from "react";
import "./Todo.css";

export default function Todo({ children }) {
  const [todoArray, setTodoArray] = useState(
    JSON.parse(localStorage.getItem("listOfTodos")) ?? [
      { name: "qwerty", description: "ytrewq", key: "asd" },
      { name: "123456", description: "654321", key: "nko" },
      { name: "Night", description: "Day", key: "ghj" },
    ]
  );
  const newTodo = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    const randomValue = (Math.random() + 1).toString(36).substring(7);
    const newTodoArray = [
      ...todoArray,
      {
        name: event.target[0].value,
        description: event.target[1].value,
        key: randomValue,
      },
    ];
    localStorage.setItem("listOfTodos", JSON.stringify(newTodoArray));
    setTodoArray(newTodoArray);
  };
  const clearTodos = () => {
    localStorage.setItem("listOfTodos", JSON.stringify([]));
    setTodoArray([]);
  };
  return (
    <div>
      <div>Todo faq</div>
      {/* <div>{children}</div> */}
      <form onSubmit={newTodo}>
        <input type="text" />
        <textarea id="" cols="30" rows="10"></textarea>
        <button type="submit">Create new to do</button>
      </form>
      <button onClick={clearTodos}>Clear to dos</button>
      <div className="render-todo">
        {todoArray.map((todo) => (
          <div key={todo.key}>
            <span>{todo.name}</span>
            <span>{todo.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
