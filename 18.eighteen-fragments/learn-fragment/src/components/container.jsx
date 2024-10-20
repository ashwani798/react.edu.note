import styles from "./container.module.css";
const container = (props) => {
  return <div className={styles.container}>{props.children}</div>;
};

export default container;
