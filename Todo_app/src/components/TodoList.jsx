import Newtask from "./newtask";
import styles from "./todolist.module.css";
export default function TodoList({
  todo,
  setTodo,
  compcount,
  setCompCount,
  count,
  setCount,
}) {
  const sortedTodo = todo
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodo.map((to) => (
        <Newtask
          key={to.name}
          value={to}
          todo={todo}
          setTodo={setTodo}
          compcount={compcount}
          setCompCount={setCompCount}
          count={count}
          setCount={setCount}
        />
      ))}
    </div>
  );
}
