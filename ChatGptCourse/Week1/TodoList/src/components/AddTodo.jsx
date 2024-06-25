// eslint-disable-next-line react/prop-types
const AddTodo = ({ todoValue, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Task"
        value={todoValue}
        onChange={handleChange}
      />
      <button type="submit">Add!</button>
    </form>
  );
};

export default AddTodo;
