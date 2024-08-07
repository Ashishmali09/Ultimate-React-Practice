import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
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
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
