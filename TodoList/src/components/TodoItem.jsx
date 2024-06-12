/* eslint-disable react/prop-types */
const TodoItem = ({ todo, handleCompleteTodo }) => {
  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        {todo.text}{" "}
        <button onClick={() => handleCompleteTodo(todo.key)}>Completada</button>
      </li>
    </>
  );
};

export default TodoItem;
