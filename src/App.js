import './App.css';
import Projects from './projects';
import Images from './Images';
import profile from './files/Ellipse 1.png';
import uni from './files/SydneyUniversity_MainBuilding_Panorama.png'
import resume from './files/Resume.pdf';
import React, { Component, createRef } from "react";
import ReactTypingEffect from 'react-typing-effect';

export default class App extends Component {
  scrollDiv = createRef();

  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  render(){
    return (
      <div className="Wrapper">
          <div className="GeneralInfo" ref={this.scrollTop} style={{"display":"inline-block"}}>
            <img src={profile} alt="" style={{"height" : "10%", "width" : "10%", "overflow":"hidden"}}></img>
            <div style={{"float":"right", "width":"85%"}}>
              <p style={{"fontSize":"200%", "height":"auto"}}> Abhinandan Srinivas </p>
              <div>
                <ReactTypingEffect text="Software Developer" style={{"font-size": "150%","margin-bottom": "2%"}} eraseDelay={20000}/>
              </div>
              <br></br>
              <a href={resume} download className="SubHeadingButton" style={{"fontSize":"120%", "padding":"1% 7%"}}> Resume </a>
            </div>
          </div> 
        <div className="Frameworks" style={{"float":"right"}}>
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
        
        <div ref={this.scrollDiv} className="">
          {/*<button className="SubHeadingButton" onClick={this.scrollSmoothHandler}> Some of my projects </button>*/}
          <Projects />
        </div>
        {/* <div className="Top" onClick={this.scrollTopHandler}><img src={top} alt="back to top"></img></div> */}
      </div>
    );
  }
}