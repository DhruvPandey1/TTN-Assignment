import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function UserProfile() {
    const { users } = useContext(UserContext);
    const [user, setUser] = useState({});
    const [id, setId] = useState("");

    const handleSearch = () => {
        const found = users.find(u => u.id === Number(id));
        if (found) setUser(found);
        else setUser({});
    };

    return (
        <div className="container-btn">
            <input 
                type="number" 
                value={id} 
                onChange={e => setId(e.target.value)} 
                placeholder="Enter UserId ..." 
            />
            <button type="button" onClick={handleSearch}>Search</button>
            {user.name && <h3>{user.name}</h3>}
            {user.email && <p>{user.email}</p>}
        </div>
    );
}

export default UserProfile;
