import Newtask from "./newtask";

export default function TodoList({ todo }) {
  return (
    <div>
      {todo.map((to) => (
        <Newtask key={to} value={to} />
      ))}
    </div>
  );
}
