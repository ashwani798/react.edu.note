import styles from "./item.module.css";

const Items = ({ foodItem }) => {
  return (
    <li className={`${styles["ap-item"]} last-group-item`}>
      <span className={styles["ap-span"]}>{foodItem}</span>
    </li>
  );
};

export default Items;
