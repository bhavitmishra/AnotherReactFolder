import { useState } from "react";
import styles from "./footer.module.css";
export default function Footer({ count, compcount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Total Todos : {count}</span>
      <span className={styles.item}>Completed Todos:{compcount}</span>
    </div>
  );
}
