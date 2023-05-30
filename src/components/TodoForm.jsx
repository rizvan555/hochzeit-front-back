import React from "react";

function TodoForm({ value, setValue, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter your todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
