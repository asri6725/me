import uni from './files/SydneyUniversity_MainBuilding_Panorama.png';
import Images from './Images';

function About(){
    return(
        <div>
            <div>
                <p className="SubTitle"> About </p>
            </div>

            <div className="Frameworks" style={{"float":"right"}} >
                <p className="SubHeading"> The University of Sydney </p>
                <p className="text">
                Bachelor of Computer Science and Technology
                </p>
                <p>
                2016 s1 to 2020 s2
                </p>
                <img src={uni} alt="The University of Sydney" style={{"height":"10%", "width":"100%"}}/>
            </div>
            <div className="Frameworks">
                <p className="SubHeading">Frameworks, Technologies, and Services</p>
                <Images />
            </div>
            </div>
    )
};
export default About;