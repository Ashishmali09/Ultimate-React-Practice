import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  handleNewItem: () => {},
  handleDeleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
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
  // const [todoItems, setTodoItems] = useState([]);
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

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

    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);

    /*  setTodoItems((currValue) => [
      ...currValue,
      {
        name: itemName,
        dueDate: itemDueDate,
      },
    ]); */
  };
  const handleDeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
    /* const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems); */
    // console.log(`Item has been deleted: ${todoItemName}`);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        handleNewItem: handleNewItem,
        handleDeleteItem: handleDeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemsContextProvider;
