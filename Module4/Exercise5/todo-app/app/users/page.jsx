import Link from "next/link";
import './page.css'
export default async function Users(){

    const data=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await data.json();
    return(
        <div className="users">
            <h2>Users List</h2>

            <ul>
                {users.map(({id,name,username,email},i)=>(
                    <li key={i}>
                        <h3>User Id : {id}</h3>
                        <span>Name: {name}</span>
                        <span>UserName: {username}</span>
                        <span>Email: {email}</span>
                        <Link href={`/users/${id}`}>User Details</Link>

                    </li>
                ))}
            </ul>
        </div>
        
    );
}