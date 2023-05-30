const Todo = ({ todo, index, deleteTodo }) => {
  return (
    <div>
      <label>
        <input type="checkbox" name="checkbox" id="checkbox" />
        <p>{todo.text}</p>
      </label>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
};

export default Todo;
