import Styles from "./FoodInput.module.css";
const FoodInput = ({ handleKeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Foor Item here"
      className={Styles.FoodInput}
      onKeyDown={handleKeyDown}
    />
  );
};

export default FoodInput;
