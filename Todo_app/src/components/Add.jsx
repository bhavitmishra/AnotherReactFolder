import { useState } from "react";

import Form from "./Form";
import TodoList from "./TodoList";
import Header from "./Header";
import Footer from "./Footer";
export default function Add() {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [compcount, setCompCount] = useState(0);

  return (
    <div>
      <Header />
      <Form todo={todo} setTodo={setTodo} count={count} setCount={setCount} />

      <TodoList
        todo={todo}
        setTodo={setTodo}
        compcount={compcount}
        setCompCount={setCompCount}
        count={count}
        setCount={setCount}
      />

      <Footer count={count} compcount={compcount} />
    </div>
  );
}
