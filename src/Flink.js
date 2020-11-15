import java from './files/java.png';
function Flink(){
    return(
        <div>
            <div className="SubHeading">
                <p> Data Processing with Flink </p>
            </div>
            <div className="Description">
                <p className="text"> Used apache Flink to process large amounts of data simultaneously.</p>
                <div className="">
                    <img src={java} alt="java logo" className="logo"/>
                    
                </div>
                <div className="buttonpos">
                <a className="SecondaryButton" href="https://github.com/asri6725/ApacheFlink" rel="noopener noreferrer" target="_blank" style={{"width":"15%"}}> GitHub Code </a>
                </div>
            </div>
        </div>
    )
}

export default Flink;