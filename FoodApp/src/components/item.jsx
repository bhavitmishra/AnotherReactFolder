import styles from "./item.module.css";

export default function Item({ item }) {
  return (
    <div>
      <div className={styles.itemcontainer}>
        <div className={styles.imgcont}>
          <img
            className={styles.img}
            src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
            alt=""
          />
        </div>
        <div className={styles.namecon}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
