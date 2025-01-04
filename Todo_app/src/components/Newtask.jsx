import styles from "./newtask.module.css";

export default function Newtask({
  value,
  todo,
  setTodo,
  compcount,
  setCompCount,
  count,
  setCount,
}) {
  function handlecomp(value) {
    const updatedTodos = todo.map((obj) => {
      if (obj.name === value) {
        if (obj.done === false && compcount >= 0) {
          setCompCount(compcount + 1);
        } else setCompCount(compcount - 1);
        return { ...obj, done: !obj.done };
      }
      return obj;
    });
    setTodo(updatedTodos);
  }
  function handleDelete(item) {
    todo.map((it) => {
      if (it === item && it.done === true) {
        setCompCount(compcount - 1);
      }
    });
    const narray = todo.filter((todo) => item != todo);
    setTodo(narray);
    setCount(count - 1);
  }
  return (
    <div className={styles.badadiv}>
      <div className={styles.chotadiv}>
        <span
          className={value.done ? styles.completed : ""}
          onClick={(e) => handlecomp(value.name)}
        >
          {value.name}
        </span>
        <span>
          <button onClick={() => handleDelete(value)} className={styles.kattis}>
            X
          </button>
        </span>
      </div>
      <hr className={styles.dandi} />
    </div>
  );
}
