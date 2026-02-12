import './login.css'
function Login({login}){
    
    return(
        <div className="login-container">
            <h2>Login Form</h2>

            <form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required/>

                <button type="button" className="login-btn" onClick={login}>Login</button>
            </form>
        </div>
    );
}

export default Login;