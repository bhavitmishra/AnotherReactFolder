import { useState } from "react";

export default function Form({ todo, setTodo }) {
  const [task, setTask] = useState("");

  function whattodo(e) {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask("");
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Add a Task...."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" onClick={(e) => whattodo(e)}>
        Add
      </button>
    </form>
  );
}
