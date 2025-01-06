import Item from "./item";

const FoodItems = ({ foodItemsList1 }) => {
  return (
    <ul className="list-group">
      {foodItemsList1.map((items) => (
      <Item key={items} item={items}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
