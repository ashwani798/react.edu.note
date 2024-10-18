import Items from "./items";
const Fooditems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Items key={item} foodItem={item}></Items>
      ))}
    </ul>
  );
};

export default Fooditems;
