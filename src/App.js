import './App.css';
import Images from './Images';
import profile from './files/Ellipse 1.png';
import uni from './files/SydneyUniversity_MainBuilding_Panorama.png'
import resume from './files/Resume.pdf';
import React, { Component, createRef } from "react";
import ReactTypingEffect from 'react-typing-effect';
/* Projects below */
import ANZ from './ANZ';
import Saemushi from './saemushi';
import Rocketboy from './rocketboy';
import Westmead from './Westmead';

export default class App extends Component {
  scrollDiv = createRef();
  scrollAbout = createRef();

  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollSmoothHandlerTwo = () => {
    this.scrollAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  render(){
    return (
      <div className="Wrapper">
          <div className="GeneralInfo" ref={this.scrollTop} style={{"display":"inline-block"}}>
            <img src={profile} alt="" style={{"height" : "10%", "width" : "10%", "overflow":"hidden"}} className="profileimg"></img>
            <div style={{"float":"right", "width":"85%"}}>
            <a className="SecondaryButton" href="https://github.com/asri6725/" style={{"float":"right", "width":"15%"}}> GitHub </a>
              <p className="MainTitle"> Abhinandan Srinivas </p>
              <div>
                <ReactTypingEffect text="Software Developer" style={{"font-size": "150%"}} eraseDelay={20000} className="FloatText"/>
              </div>
              <br />
              <br />
              <a href={resume} download className="SecondaryButton"> Resume </a>
            </div>
          </div> 

        {/* Project List */}
        <div className="GeneralInfo">
          <button className="SubHeadingButton" onClick={this.scrollSmoothHandler}> Some of my projects </button>
        </div>
        
        <div ref={this.scrollDiv} className="GeneralInfo">
          <Saemushi />
        </div>

        <div className="GeneralInfo">
          <ANZ />
        </div>

        <div className="GeneralInfo">
          <Westmead />
        </div>

        <div className="GeneralInfo">
          <Rocketboy />
        </div>

        {/* About me */}

        <div className="GeneralInfo">
          <button className="SubHeadingButton" onClick={this.scrollSmoothHandlerTwo}> About Me </button>
        </div>

        <div className="Frameworks" style={{"float":"right"}} ref={this.scrollAbout}>
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
        
        {/* <div className="Top" onClick={this.scrollTopHandler}><img src={top} alt="back to top"></img></div> */}
      </div>
    );
  }
}