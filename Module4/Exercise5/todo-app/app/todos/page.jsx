import Link from "next/link";
import "./page.css";

export default async function Todos(){

    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await data.json();

    return(
        <div className="todos">
            <h2>Todos</h2>

            <ul>
                {todos.map(({id,title})=>(
                    <li key={id}>
                        <h3>Todo Id: {id}</h3>
                        <p className="title">{title}</p>
                        <Link href={`/todos/${id}`}>Todo Details</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
