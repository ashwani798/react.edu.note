import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map(
        (
          item,
          index // Use todoItems here
        ) => (
          <Todoitem key={index} todoDate={item.dueDate} todoName={item.name} />
        )
      )}
    </div>
  );
};

export default TodoItems;
