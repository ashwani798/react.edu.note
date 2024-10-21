import styles from "./item.module.css";

const Items = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["ap-item"]} list-group-item ${bought && `active`}`}
    >
      <span className={styles["ap-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Items;
