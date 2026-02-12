import {Link,Routes,Route, useNavigate} from "react-router-dom"
import CounterButton from "./components/CounterButton";
import IncrementDecrementCounter from "./components/IncrementDecrementCounter";
import TodoList from "./components/TodoList";
import Parent from "./components/Parent";
import Login from "./components/Login";
import { useState } from "react";
import Logout from "./components/Logout";
import "./App.css"
function App() {

  const navigate=useNavigate();
  const [isLogin,setIsLogin]=useState(false)
  const navigateLogin=()=>{
    navigate('/login');
  }

  const login=()=>{
    setIsLogin(true)
    navigate("/");
  }
  const navigateLogout=()=>{
    navigate('/logout')
    setIsLogin(false);
  }

  return (
    <>

      <div>
        <nav className="home">
          <Link to="/">Home</Link>
          <Link to="/q1">Q1</Link>
          <Link to="/q2">Q2</Link>
          <Link to="/q3">Q3</Link>
          <Link to="/q4">Q4</Link>
          {isLogin?(
          <button type="button" onClick={navigateLogout} className="btn">Logout</button>  
          ):(<button type="button" onClick={navigateLogin} className="btn">Login</button>)        
          }
        </nav>
        <Routes>
          <Route path="/q1" element={<CounterButton/>}/>
          <Route path="/q2" element={<IncrementDecrementCounter/>}/>
          <Route path="/q3" element={<Parent/>}/>
          <Route path="/q4" element={<TodoList/>}/>
          <Route path="/login" element={<Login login={login}/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </div>
    </>

  );
}

export default App;
