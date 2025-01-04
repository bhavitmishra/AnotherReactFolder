import { useEffect } from "react";
import { useState } from "react";
import styles from "./search.module.css";

const url = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "3c9bd45e53834ca4b1319b7b91aed789";

export default function Search({ fooddata, setFoodData }) {
  const [query, setQuery] = useState("");
  // syntax of use effect hook
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.header}>
      <form>
        <input
          className={styles.box}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for food item"
          type="text"
          value={query}
        />
      </form>
    </div>
  );
}
