import { useEffect, useState } from "react";
import styles from "./recipe.module.css";
import ItemList from "./itemlist";
export default function RecipeComp({ shit }) {
  const [isLoading, setIsLoading] = useState(true);
  const [food, setFood] = useState({});
  const url = `https://api.spoonacular.com/recipes/${shit}/information`;
  const API_KEY = "3c9bd45e53834ca4b1319b7b91aed789";
  const apiUrl = `https://api.spoonacular.com/recipes/${shit}/information?apiKey=${API_KEY}`;
  // console.log(apiUrl);

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(apiUrl);
      const data = await response.json();
      console.log(data);

      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [shit]);

  return (
    <div>
      <div className={styles.b1}>
        <h1>{food.title} </h1>
        <img className={styles.img} src={food.image} alt="" />

        <div className={styles.recpdetails}>
          <span>
            <strong>🕛 {food.readyInMinutes} </strong> Minutes
          </span>
          <span>
            <strong>🧔🏻 Serves {food.servings} persons</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "  🥕 Vegetarian" : "  🥩 Non- Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? "Vegan" : ""}</strong>
          </span>
          <span>
            <strong>Cost per serving: 💲{food.pricePerServing / 100}</strong>
          </span>
        </div>
        <h2>Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />
        <h2>Instructions</h2>
        <div className={styles.recpins}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
