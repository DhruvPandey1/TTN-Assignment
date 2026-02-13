import { useContext, useState } from 'react';
import './login.css'
import { UserContext } from '../context/UserContext';


function Login({login}) {

    const { dispatchUserEvent } = useContext(UserContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = (e) => {
        e.preventDefault();

        if (!name || !email) {
            alert("Please fill all fields");
            return;
        }

        const user = {
            id: Date.now(),
            name,
            email
        };
        console.log(user.id)
        dispatchUserEvent('ADD_USER', { newUser: user });

        setName('');
        setEmail('');
        // login();
    };

    return (
        <div className="login-container">
            <h2>Login Form</h2>

            <form onSubmit={handleAddUser}>
                <label>Name</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                />

                <label>Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                />

                <label>Password</label>
                <input 
                    type="password" 
                />

                <button type="submit" className="login-btn" >
                    Login_Q3
                </button>
                <button type="button" className="login-btn" onClick={login}>
                    Login_Q1
                </button>
            </form>

        </div>
    );
}

export default Login;
