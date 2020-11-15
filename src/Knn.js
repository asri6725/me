import java from './files/java.png';
function Knn(){
    return(
        <div>
            <div className="SubHeading">
                <p> Predictions with kNN Classifier </p>
            </div>
            <div className="Description">
                <p className="text"> Built a kNN classifier from scratch on Java. </p>
                <div className="">
                    <img src={java} alt="Java logo" className="logo"/>
                    
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://github.com/asri6725/kNN" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> GitHub Code </a>
                </div>
            </div>
        </div>
    );
}

export default Knn;