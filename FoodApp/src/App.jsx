import { useState } from "react";
import FoodApp from "./components/FoodApp";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FoodApp />
    </>
  );
}

export default App;
