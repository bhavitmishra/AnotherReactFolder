import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
export default function Add() {
  const [todo, setTodo] = useState([]);
  return (
    <div>
      <Form todo={todo} setTodo={setTodo} />

      <TodoList todo={todo} />
    </div>
  );
}
