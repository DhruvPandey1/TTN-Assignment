import { useEffect, useState } from "react";
import { getTodos, createTodo } from "./api";

function App() {
  const [todos, setTodos] = useState<{id: string, title: string}[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await getTodos();

      setTodos(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdd = async () => {
    try {
      await createTodo(title);
      setTitle("");
      loadTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>To-Do App</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((t) => (
          
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;