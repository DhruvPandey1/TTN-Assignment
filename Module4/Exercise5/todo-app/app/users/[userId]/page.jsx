import Link from "next/link";
import "./page.css";

export default async function UserDetail({ params }) {

    const { userId } = await params;

    const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    const { id, name, username, email, address, phone, website } = await data.json();

    return (
        <div className="user-detail">
            <div className="card">

                <div className="top">
                    <h4>User ID: {id}</h4>
                    <h2>{name}</h2>
                    <p className="username">@{username}</p>
                </div>

                <div className="middle">
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Phone:</strong> {phone}</p>
                    <p>
                        <strong>Address:</strong> {address.suite}, {address.street}, {address.city}
                    </p>
                </div>

                <div className="bottom">
                    <a 
                        href={website} 
                    >
                        Visit Website
                    </a>

                    <Link href={`/users/${userId}/todo`}>
                        Todo of User
                    </Link>
                </div>

            </div>
        </div>
    );
}
