import express from "express";
import { addTodo, deleteTodo } from "./model/TodoModel.js";
import cors from "cors";

const app = express();
const PORT = process.env.Port || 3000;

app.use(express.json());
app.use(cors());

app.get("/todos", (req, res) => {
  res.send("hello");
});

app.post("/todos", async (req, res) => {
  const todo = req.body;
  const newTodo = await addTodo(todo);
  res.send(newTodo);
});

app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = req.body;
  const updateTodo = await updateTodo(id, todo);
  res.send(updateTodo);
});

app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  deleteTodo(id);
  res.send("It has deleted");
});

app.listen(PORT, () =>
  console.log(`Server is am laufen mit diesem Port ${PORT}`)
);
