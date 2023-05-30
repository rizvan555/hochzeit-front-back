import "./App.css";
import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  // wir werden hier was hinzufügen aber lokal

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  // wir werden was hinzufügen und danach in der Datenbank speichern
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text: value,
      complete: false,
    });

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: value,
        complete: false,
      }),
    });
    setValue("");
  };

  // Damit werden wir was löschen
  const deleteTodo = (index) => {
    fetch("http://localhost:3000/todos/" + todos[index].id, {
      method: "DELETE",
    });
    const newTodos = todos.filter((todo) => todo.id !== index.id);
    setTodos(newTodos);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await fetch("http://localhost:3000/todos", {});
      const data = await result.json();
      setTodos(data);
    };
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm value={value} setValue={setValue} handleSubmit={handleSubmit} />
      <div>
        {todos.map((todo, index) => {
          return (
            <Todo
              todo={todo}
              key={index}
              index={index}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
