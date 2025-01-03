import React from "react";
import Fruits from "./Fruits";

function Des() {
  const fruitt = ["Apple", "Mango", "Banana", "Shit"];
  return (
    <div>
      {fruitt.map((fruit, index) => (
        <Fruits key={index} froot={fruit} /> // Pass each fruit to the Fruits component
      ))}
    </div>
  );
}

export default Des;
