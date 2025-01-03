import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setincrementBy] = useState(0);

  function Increment() {
    setCount(count + incrementBy);
  }
  function Decrement() {
    setCount(count - incrementBy);
  }
  function IncrementBy() {
    setincrementBy(incrementBy + 1);
  }
  function DecrementBy() {
    setincrementBy(incrementBy - 1);
  }

  return (
    <>
      <div>
        <h1>The count is : {count}</h1>
      </div>
      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
      <div>
        <h1>Increment by value: {incrementBy}</h1>
      </div>
      <div>
        <button onClick={IncrementBy}>Increment By</button>
        <button onClick={DecrementBy}>Decrement By</button>
      </div>
    </>
  );
}
