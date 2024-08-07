import Item from "./Item";
import { useState } from "react";
const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);
  const handleBuyButton = (item, event) => {
    let newActiveItems = [...activeItems, item];
    setActiveItems(newActiveItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => handleBuyButton(item, event)}
        /> // Without key prop App's performance will be slow! so use key everytime!!.
      ))}
    </ul>
  );
};
export default FoodItems;
