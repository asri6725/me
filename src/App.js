import './App.css';
import Images from './Images';
import profile from './files/Ellipse 1.png';
import uni from './files/SydneyUniversity_MainBuilding_Panorama.png'
import resume from './files/Resume.pdf';
import React, { Component, createRef } from "react";
import ReactTypingEffect from 'react-typing-effect';
import Progress from './Progress';
/* Projects below */
import ANZ from './ANZ';
import Saemushi from './saemushi';
import Rocketboy from './rocketboy';
import Westmead from './Westmead';

export default class App extends Component {
  scrollDiv = createRef();
  scrollAbout = createRef();
  scrollHome = createRef();
/*
  scrollFunc = (scrollDiv) =>{
    var headerOffset = 0;
    var elementPosition = scrollDiv.current.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;
    console.log("Scrolling to: ", offsetPosition, ", element position: ", elementPosition);
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  }*/

  scrollToHome = () =>{
    this.scrollHome.current.scrollIntoView({ behavior: "smooth" });
  }

  scrollToAbout = () => {
    this.scrollAbout.current.scrollIntoView({ behavior: "smooth" });
  };

  scrollToProjects = () => {
    this.scrollDiv.current.scrollIntoView({behavior:"smooth"});
  }

  render(){
    return (
      <div className="Wrapper">
        <div className="navbar">
          <Progress home={this.scrollToHome} about={this.scrollToAbout} projects={this.scrollToProjects} />
        </div>

      
        <div className="Card" ref={this.scrollHome}>
          <img src={profile} alt="" style={{"height" : "10%", "width" : "10%", "overflow":"hidden"}} className="profileimg"></img>
          <div style={{"float":"right", "width":"85%"}}>
          <a className="SecondaryButton" href="https://github.com/asri6725/" rel="noopener noreferrer" target="_blank" style={{"float":"right", "width":"15%"}}> GitHub </a>
            <p className="MainTitle"> Abhinandan Srinivas </p>
            <div>
              <ReactTypingEffect text="Software Developer" style={{"font-size": "150%"}} eraseDelay={20000} className="FloatText"/>
            </div>
            <br />
            <br />
            <a href={resume} download className="SecondaryButton" rel="noopener noreferrer" target="_blank"> Resume </a>
          </div>
        </div> 
        {/* Project List */}
        <div className="Card" ref={this.scrollDiv}>
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
        {/* About me */}
        <div className="Card" ref={this.scrollAbout}>
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
          
          {/* <div className="Top" onClick={this.scrollTopHandler}><img src={top} alt="back to top"></img></div> */}
        </div>
      </div>
    );
  }
}