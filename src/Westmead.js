import westmeadimg from './files/westmeadapp.png';
import './Westmead.css';

function Westmead(){
    return(
        <div className="Wrap">
            <div className="SubHeading">
                <p> Western Sydney Local Health Services </p>
            </div>
            <div className="image">
            <div className="imgs">
                <img src={westmeadimg} alt="ANZ app" style={{"maxWidth":"100%","maxHeight":"100%"}}/>
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

export default Westmead;