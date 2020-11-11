import saemushi from './files/saemushi.png';
import angular from './files/angular.png';
function Saemushi(){
    return(
        <div>
            <div className="SubHeading">
                <p> Saemushi </p>
            </div>
            <div className="image">
            <div className="imgs">
                <img src={saemushi} alt="ANZ app" style={{"maxWidth":"100%","maxHeight":"100%"}} />
            </div>
            </div>
            <div className="Description">
                <p className="text">
                I am currently interning as a frontend developer at Saemushi contrbuting to their new project set 
                to release in 2021. 
                </p>
                <div className="">
                    <img src={angular} alt="react logo" className="logo"/>
                    
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://saemushi.com/" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> Company Site </a>
                </div>
            </div>
        </div>
    );
}

export default Saemushi;