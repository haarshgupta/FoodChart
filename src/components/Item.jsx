import styles from "./Items.module.css";

const Item = ({item}) => {

const handleOnClickEvent=(events)=>{
  console.log(events); 
  console.log(`${item} lelo.`)
}

  return (
    <li className={`${styles.itemStyles} list-group-item`} >{item}
    <button className={`${styles.itemButton} btn btn-info`}
    onClick={(events) =>handleOnClickEvent(events)}// handleOnClickEvent is the refference to the function above .
    >Buy</button>
    </li>
  );
};

export default Item;
