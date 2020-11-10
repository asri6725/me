import anz from './files/anzapp.png';
import './ANZ.css'
function ANZ(){
    return(
        <div>
            <img src={anz} alt="ANZ app" className="imgs" css={{"float":"right"}} />
            <p className="text">
                As a part of a multi-disciplinary team, I looked at the technical implications of open banking.
                During the course of the internship, I performed a full and thourough design cycle based on the requirements
                of the team members and analysed its technical implications.
            </p>
        </div>
    );
}

export default ANZ;