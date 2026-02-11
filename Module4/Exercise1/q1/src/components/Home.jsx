import { Link } from 'react-router-dom'
import './main.css'
function Home(){
    return(
        <div className='home'>
            <nav>
                {/* <Link to="/">Home</Link> */}
                <Link to="/q1">Q1</Link>
                <Link to="/q2">Q2</Link>
                <Link to="/q3/Function">Function Components</Link>
                <Link to="/q3/class">Class Components</Link>
                <Link to="/q4">Q4</Link>
            </nav>
        </div>
    );
}

export default Home