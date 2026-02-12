import { useState } from "react";
import TodoForm from "./TodoForm";

function TodoList() {
    const [showForm, setShowForm] = useState(false);
    const [todo, setTodo] = useState([]);

    const handleTodo = (obj) => {
        setTodo((prevTodos) => [...prevTodos, obj]);
    }

    return (
        <div>
            <div className="todo">
                
                <div className="todo-header">
                    <h2>My Todos</h2>
                    <button className="add-btn" onClick={() => setShowForm(true)}>
                     Add
                    </button>
                </div>

                <ul>
                    {todo.map((item, index) => (
                        <li key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>

            {showForm && (
                <div className="modal-overlay">
                    <TodoForm
                    onClose={() => setShowForm(false)}
                    handleTodo={handleTodo}
                    />
                </div>
            )}
        </div>
    );
}

export default TodoList;
