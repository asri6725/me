import './App.css';
import Projects from './projects';
import Images from './Images';
import profile from './files/Ellipse 1.png';
import resume from './files/Resume.pdf';
import top from './files/Top.svg'
import React, { Component, createRef } from "react";

export default class App extends Component {
  scrollDiv = createRef();

  scrollSmoothHandler = () => {
    this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollTop = createRef();
  scrollTopHandler = () => {
    this.scrollTop.current.scrollIntoView({ behavior: "smooth" });
  };

  render(){
    return (
      <div className="Wrapper">
          <div className="GeneralInfo" ref={this.scrollTop} style={{"display":"inline-block", "width":"100%"}}>
            <img src={profile} alt="" style={{"height" : "10%", "width" : "10%", "overflow":"hidden"}}></img>
            <div style={{"float":"right", "width":"85%"}}>
              <p style={{"font-size":"200%", "line-height":"200%"}}> Abhinandan Srinivas </p>
              <p style={{"font-size":"150%", "line-height":"50%"}}> Software Developer </p>
              <a href={resume} download className="SecondaryButton"> Resume </a>
            </div>
          </div>
        <div className="EverythingElse">  
        <div className="Frameworks">
          <p className="SubHeading">Some of my frameworks</p>
          <Images />
        </div>
        <div>
          <p className="SubHeadingButton" onClick={this.scrollSmoothHandler}> Some of my projects </p>   
        </div>
        <div ref={this.scrollDiv} style={{"height":"5000px"}}>
          <Projects />
        </div>
        </div>
        <div className="Top" onClick={this.scrollTopHandler}><img src={top} alt="back to top"></img></div>
      </div>
    );
  }
}