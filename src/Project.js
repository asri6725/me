import ANZ from './ANZ';
import Saemushi from './saemushi';
import Rocketboy from './rocketboy';
import Westmead from './Westmead';
function Project(){
    return(
        <div>
            <div className="Project">
            <p className="SubTitle" > Some of my projects </p>
          </div>
          
          <div className="Card">
            <Saemushi />
          </div>

          <div className="Card">
            <Westmead />
          </div>

          <div className="Card">
            <Rocketboy />
          </div>

          <div className="Card">
            <ANZ />
          </div>

        </div>
    )
};
export default Project;