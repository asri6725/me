import './Rocketboy.css';
import rocketimg from './files/rocketboy2.png';

function Rocketboy(){
    return(
        <div className="Wrap">
            <div className="SubHeading">
                Rocketboy WebApp
            </div>
            <div className="image">
            <div className="imgs">
                <img src={rocketimg} alt="ANZ app" style={{"maxWidth":"100%","maxHeight":"100%"}}/>
            </div>
            </div>
            <div className="Description">
                <p className="text">
                    As a part of a multi-disciplinary team, I looked at the technical implications of open banking.
                    During the course of the internship, I performed a full and thourough design cycle based on the requirements
                    of the team members and analysed its technical implications.
                </p>
            </div>
        </div>
    );
}
export default Rocketboy;