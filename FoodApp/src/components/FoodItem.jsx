import styles from "./fooditem.module.css";

export default function FoodItem({ item, shit, setShit }) {
  return (
    <div className={styles.card}>
      <img className={styles.cardimg} src={item.image} alt="" />
      <h1 className={styles.cardtitle}>{item.title}</h1>
      <button
        className={styles.cardbtn}
        onClick={() => {
          setShit(item.id);
          // console.log(shit);
        }}
      >
        View Recipe
      </button>
    </div>
  );
}
