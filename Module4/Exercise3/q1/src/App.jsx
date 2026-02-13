
import { useContext,useState} from 'react';
import './App.css';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import { ThemeContext } from './context/ThemeContext';
import Logout from './components/Logout';
import {Link,Routes,Route,useNavigate} from 'react-router-dom';
import UserProvider from './provider/UserProvider';
import Home from './components/Home';

function App() {
  const {theme,themeToggler}=useContext(ThemeContext);
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
      <div className={theme==="dark"?"dark-container":"light-container"}>
        <nav className="home">
          {isLogin?(
          <button type="button" onClick={navigateLogout} className="btn">Logout</button>  
          ):(<button type="button" onClick={navigateLogin} className="btn">Login</button>)        
          }
          <button type='button' onClick={themeToggler}>Toggle Theme</button>
        </nav>
        <div className="container">
          <Routes>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/login'element={
              <UserProvider>
              <Login login={login}/>
              <UserProfile/>
              </UserProvider>
            }/>
            <Route path='/' element={<Home isLogin={isLogin}/>}/>
          </Routes>
          
        </div>
        
      </div>
      
    </>
  );
}

export default App;
