import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  /* const initialTodoItems = [
    {
      name: "Buy Milk",
      dueDate: "14/4/2024",
    },
    {
      name: "Go to College",
      dueDate: "14/4/2024",
    },
    {
      name: "Keep Exploring",
      dueDate: "Until you are here",
    },
  ]; */
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`New item added --> item: ${itemName} date: ${itemDueDate}`);
    /* setTodoItems((currValue) => {
      let newTodoItems = [
        ...currValue,
        {
          name: itemName,
          dueDate: itemDueDate,
        },
      ];
      return newTodoItems;
    }); */
    setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]);
  };
  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
    // console.log(`Item has been deleted: ${todoItemName}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage todoItems={todoItems} />}
      <TodoItems todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
    </center>
  );
}

export default App;
