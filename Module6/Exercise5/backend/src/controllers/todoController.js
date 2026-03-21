const db = require("../db");

const getTodos = async (req, res) => {
  const result = await db.query("SELECT * FROM todos");
  res.json(result.rows);
};

const createTodo = async (req, res) => {
  const { title } = req.body;
  const result = await db.query(
    "INSERT INTO todos (title) VALUES ($1) RETURNING *",
    [title]
  );
  res.status(201).json(result.rows[0]);
};

module.exports = {getTodos, createTodo}