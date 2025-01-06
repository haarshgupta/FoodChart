
import style from "./ItemInput.module.css";
const ItemInput =()=>{
const handleOnChange =(events)=>{
  console.log(events.target.value);
}

  return <div>
  <input type="text" placeholder="Enter the food item." className={style.inputItem}
  onChange={handleOnChange}
  >
  </input>
  </div>
}

export default ItemInput;