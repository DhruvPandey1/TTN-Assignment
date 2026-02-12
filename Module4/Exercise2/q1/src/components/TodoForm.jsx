import { useState } from 'react';
import './TodoForm.css'

function TodoForm({ onClose, handleTodo }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onSave = (e) => {
        e.preventDefault();

        const todo = {
            title: title,
            description: description
        };

        handleTodo(todo);
        onClose();

        setTitle("");
        setDescription("");
    }

    return (
        <div className="todo-container">
            <h2>Add Task</h2>
            <form onSubmit={onSave}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="description">Description</label>
                <textarea
                    name="description"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required    
                ></textarea>

                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}

export default TodoForm;
