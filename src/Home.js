import ReactTypingEffect from 'react-typing-effect';
import profile from './files/Ellipse 1.png';
import resume from './files/Resume.pdf';

function Home(){
    return(
        <div>
          <img src={profile} alt="" style={{"height" : "10%", "width" : "10%", "overflow":"hidden"}} className="profileimg"></img>
          <div style={{"float":"right", "width":"85%"}}>
          <a className="SecondaryButton" href="https://github.com/asri6725/" rel="noopener noreferrer" target="_blank" style={{"float":"right", "width":"15%"}}> GitHub </a>
            <p className="MainTitle"> Abhinandan Srinivas </p>
            <div>
              <ReactTypingEffect text="Software Developer" style={{"font-size": "150%"}} eraseDelay={20000} className="FloatText"/>
            </div>
            <br />
            <br />
            <a href={resume} download className="SecondaryButton" rel="noopener noreferrer" target="_blank"> Resume </a>
          </div>
        </div>
    )
};

export default Home;