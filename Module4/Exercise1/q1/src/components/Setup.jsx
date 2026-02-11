import SetupImage from '../assets/SetupImage.png'
import WebPage from '../assets/WebPage.png'
import './main.css'
function Setup(){
    return(
        <div>
            <h2>
                React Setup
            </h2>

            <ul>
                <li>Open your Terminal or console and run: npx create-react-app first-react</li>
                <li>cd first-react</li>
                <li>npm start</li>
            </ul>
            <div className='images'>
                <img src={SetupImage} alt="SetupImage" />
                <img src={WebPage} alt="WebPage" />
            </div>
        </div>
    );
}

export default Setup;