import python from './files/python.png';
import html from './files/html.png';
import css from './files/css3.svg';
import postgres from './files/PGLogo.png';
function MiniSocial(){
    return(
        <div>
            <div className="SubHeading">
                <p> A mini social media </p>
            </div>
            <div className="Description">
                <p className="text"> Used the Bottle framework in Python to build a mini social media website where users can post questions, comments, and send messages. With simple front end using Vanilla HTML, CSS and JavaScript; and the SQLite Database.</p>
                <div className="">
                    <img src={python} alt="python logo" className="logo"/>
                    <img src={html} alt="html logo" className="logo"/>
                    <img src={css} alt="css logo" className="logo"/>
                    <img src={postgres} alt="database logo" className="logo"/>
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://github.com/asri6725/mini-socialmedia" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> GitHub Code </a>
                </div>
            </div>
        </div>
    );
}

export default MiniSocial;