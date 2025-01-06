import "bootstrap/dist/css/bootstrap.min.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/foodItems";
import Container from "./components/Container";
import styles from "./App.module.css";
import ItemInput from "./components/ItemInput"

const App = () => {
 const foodItemsList = ["pizza","hot dog","burger","coke","briyani"];

  return (<>
    <Container>
      <h1 className={styles.headingTitle}>Healthy Items </h1>
      <ItemInput></ItemInput>
      <ErrorMessage foodItemsListProp = {foodItemsList}></ErrorMessage>
      <FoodItems foodItemsList1={foodItemsList} ></FoodItems>
     
    </Container>
    <Container>
    <p>The above is the list of Healthy  items.</p>
    </Container>
    </>
  );
};

export default App;
