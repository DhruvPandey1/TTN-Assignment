import './page.css'

export default async function TodoDetails({ params }) {
  const { todoId } = await params;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
  const { id, userId, title, completed } = await data.json();

  return (
    <div className="todo-card">
        <div className="card">
            <h3>Todo Id: {id}</h3>
            <h3>User Id: {userId}</h3>
            <span><strong>Title: </strong>{title}</span>
            <p style={{ color: completed ? "#4caf50" : "#f44336" }}>
                status: {completed ? "Completed" : "Pending"}
            </p>
        </div>
    </div>
  );
}
