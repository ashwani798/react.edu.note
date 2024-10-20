import Styles from "./FoodInput.module.css";
const FoodInput = () => {
  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Enter Foor Item here"
      className={Styles.FoodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
