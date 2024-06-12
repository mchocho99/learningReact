import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setValue] = useState("");

  const handleChangeTodo = (e) => {
    setValue(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (todoValue !== "") {
      const todo = {
        text: todoValue,
        completed: false,
      };

      setTodos([...todos, todo]);
    }
  };

  const handleCompleteTodo = (todoKey) => {
    const todosCopy = [...todos];

    todosCopy.map((todo) => {
      if (todo.key === todoKey) {
        todo.completed = true;
      }
    });

    // Mejor solucion usando el index
    // todosCopy[index].completed = !todosCopy[index].completed;

    setTodos(todosCopy);
  };

  return (
    <>
      <AddTodo
        todoValue={todoValue}
        handleChange={handleChangeTodo}
        handleSubmit={addTodo}
      />
      <TodoList todos={todos} handleCompleteTodo={handleCompleteTodo} />
    </>
  );
}

export default App;
