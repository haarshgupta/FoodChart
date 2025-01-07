import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/foodItems";
import Container from "./components/Container";
import styles from "./App.module.css";
import ItemInput from "./components/ItemInput";
import { useState } from "react";

const App = () => {

  let [foodItemsList, setFoodItemsList] = useState([
    
  ]);

  // let textStateArr = useState("Entered Food Item.");
  // let textState = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [textState, setTextState] = useState("Entered Food Item."); // Array Destructured textStateArr in [textState,SetTextState]

  const onKeyDown = (events) => {
    if (events.key === "Enter"){
      let newValue = events.target.value;
      events.target.value = '';
      let newFoodItemsList = [...foodItemsList,newValue];
      setFoodItemsList(newFoodItemsList);
    }
  
  };

  const handleOnClickEvent = (events) => {
    console.log(events)
     console.log(`${item} lelo.`);
   };

  return (
    <>
      <Container>
        <h1 className={styles.headingTitle}>Healthy Items </h1>
        <ItemInput handleOnKeyDown={onKeyDown}></ItemInput>
        <FoodItems foodItemsList1={foodItemsList} handleOnClickEvent={handleOnClickEvent}></FoodItems>
        <ErrorMessage foodItemsListProp={foodItemsList}></ErrorMessage>
      </Container>
      <Container>
        <p>The above is the list of Healthy items.</p>
      </Container>
    </>
  );
};

export default App;
