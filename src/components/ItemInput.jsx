import style from "./ItemInput.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ItemInput = ({ handleOnKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the food item."
        className={`${style.inputItem}`}
        onKeyDown={handleOnKeyDown}
      ></input>
    </div>
  );
};

export default ItemInput;
