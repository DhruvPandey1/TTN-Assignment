import Login from "../components/Login";
import UserProfile from "../components/UserProfile";
import { UserContext } from "../context/UserContext";
import { useState } from "react";

export function UserProvider({children}) {

  const [users, setUser] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {

      case "ADD_USER":
        setUser(prevUsers => [...prevUsers, payload.newUser]);
        break;

      default:
        break;
    }
  };

  return (
    <UserContext.Provider value={{ users, dispatchUserEvent }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
