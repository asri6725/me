import './project.css';
import rocketimg from './files/rocketboy2.png';
import react from './files/react.png';
function Rocketboy(){
    return(
        <div className="Wrap">
            <div className="SubHeading">
                Rocketboy
            </div>
            <div className="image">
            <div className="imgs">
                <img src={rocketimg} alt="ANZ app" style={{"maxWidth":"100%","maxHeight":"100%"}} href="https://asri6725.github.io/my-app"/>
            </div>
            </div>
            <div className="Description">
                <p className="text">
                    Designed a webapp for a pizza shop to help order prep. The entire page is connected to <a href="#">google sheets</a> and can be manipulated from there.
                </p>
                <div className="">
                    <img src={react} alt="react logo" className="logo"/>
                    
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://github.com/asri6725/my-app" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> GitHub </a>
                <a className="SecondaryButton" href="https://asri6725.github.io/my-app" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> Try It! </a>
                </div>
            </div>
        </div>
    );
}
export default Rocketboy;