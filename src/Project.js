import ANZ from './ANZ';
import Saemushi from './saemushi';
import Rocketboy from './rocketboy';
import Westmead from './Westmead';
import Flink from './Flink';
import MiniSocial from './MiniSocial';
import Knn from './Knn';
import React, {Component} from 'react';

export default class Project extends Component{
  showProjects = () => {
    this.state.show ? this.setState({show: false}) : this.setState({show: true})
  }

  constructor(props){
    super(props);
    this.state= {
      show: false,
    }
  }

  render(){
    const additionalProjs = this.state.show ? (
      <div>

        <div className="Card">
          <Saemushi />
        </div>

        <div className="Card">
            <MiniSocial />
        </div>

        <div className="Card">
            <Flink />
        </div>

        <div className="Card">
            <Knn />
        </div>


        <div>
          <button className="SecondaryButton" onClick={this.showProjects}> Hide the Projects </button>
        </div>
      </div>
    ):(
      <div>
        <button className="SecondaryButton" onClick={this.showProjects}> Show more projects </button>
      </div>
    );
    
    return(
          <div>
            <div className="Project">
              <p className="SubTitle" > Some of my projects </p>
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

            <div className="additionalProjects">
              {additionalProjs}
            </div>
          </div>
      )
  }
};