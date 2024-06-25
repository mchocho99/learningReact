/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleCompleteTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
