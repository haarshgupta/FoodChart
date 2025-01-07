import styles from "./Items.module.css";

const Item = ({ item, bought,handleOnClickEvent}) => {
 

  return (
    <li className={`${styles.itemStyles} list-group-item ${bought && "active"} `}>
      {item}
      <button
        className={`${styles.itemButton} btn btn-outline-success my-2 my-sm-0`}
        onClick={handleOnClickEvent} // handleOnClickEvent is the refference to the function above .
      >
        Buy
      </button>

    </li>
  );
};

export default Item;
