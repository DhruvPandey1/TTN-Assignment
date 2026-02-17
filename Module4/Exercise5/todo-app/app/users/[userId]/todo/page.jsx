import Link from "next/link";
import './page.css'
export default async function UserTodo({params}){
    const {userId} = await params
    const data=await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    const todos=await data.json();
    return(
        <div className="todos">
            <h2>Users todo</h2>

            <ul>
                {todos.map(({userId,id,title},i)=>(
                    <li key={i}>
                        <h3>User Id : {userId}</h3>
                        <span>id: {id}</span>
                        <span>title: {title}</span>
                        <Link href={`/todos/${id}`}>Todo details</Link>

                    </li>
                ))}
            </ul>
        </div>
        
    );
}