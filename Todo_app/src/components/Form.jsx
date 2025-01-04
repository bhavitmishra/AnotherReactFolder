import { useState } from "react";
import styles from "./form.module.css";
import Footer from "./Footer";
export default function Form({ todo, setTodo, count, setCount }) {
  const [task, setTask] = useState({
    name: "",
    done: false,
  });

  function whattodo(e) {
    e.preventDefault();
    setTodo([...todo, task]);
    setTask({ name: "", done: false });
    setCount(count + 1);
  }
  return (
    <div>
      <form className={styles.header}>
        <div className={styles.dic}>
          <input
            className={styles.inp}
            type="text"
            placeholder="Add a Task...."
            value={task.name}
            onChange={(e) => setTask({ name: e.target.value, done: false })}
          />
          <button
            className={styles.but}
            type="submit"
            onClick={(e) => whattodo(e)}
          >
            Add
          </button>
          {console.log({ todo })}
        </div>
      </form>
    </div>
  );
}
