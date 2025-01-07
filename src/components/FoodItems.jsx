import Item from "./item";
import { useState } from "react";

const FoodItems = ({ foodItemsList1, handleOnClickEvent }) => {

  let [activeItem,setActiveItem] = useState([]);

  const onBuyButton =(items,events)=>{
    let activeItemArr = [...activeItem,items];
    setActiveItem(activeItemArr);

  }

  return (
    <ul className="list-group">
      {foodItemsList1.map((items) => (
        <Item
          key={items}
          item={items}
          handleOnClickEvent={(events) => onBuyButton(items,events)}
          bought={activeItem.includes(items)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
