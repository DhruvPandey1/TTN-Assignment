import { signOut} from "next-auth/react"
import './page.css'
import Button from "../component/Button";
import LogOut from "../component/LogOut";

type User={
    id:number,
    name:string,
    username:string,
    email:string
}
export default async function Dashboard(){

    const res=await fetch("https://jsonplaceholder.typicode.com/users");
    const users=await res.json();

    return<>
        <div className="dashboard-container">
            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Name
                        </th>
                        <th>
                            UserName
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({id,name,username,email}:User)=>
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{username}</td>
                            <td>{email}</td>
                        </tr>
                    )}
                    </tbody>
            </table>
            <LogOut/>
        </div>
        
    </>
}
