import React from "react";
import "./Todo.css";

export default function Todo({ children }) {
  const todoArray = [
    { name: "qwerty", description: "ytrewq" },
    { name: "123456", description: "654321" },
    { name: "Night", description: "Day" },
  ];
  return (
    <div>
      <div>Todo faq</div>
      {/* <div>{children}</div> */}
      <div className="render-todo">
        {todoArray.map((todo) => (
          <div>
            <span>{todo.name}</span>
            <span>{todo.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
