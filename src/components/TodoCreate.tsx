import React from "react";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input placeholder="Todo giriniz" className="todo-input" type="text" />
      <button className="todo-create-button">Olustur</button>
    </div>
  );
}

export default TodoCreate;
