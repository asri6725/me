import './App.css';
import React, { Component, createRef } from "react";
import Progress from './Progress';
import Contact from './Contact';
import Home from './Home';
import Project from './Project';
import About from './About';
/* Projects below */


export default class App extends Component {
  scrollDiv = createRef();
  scrollAbout = createRef();
  scrollHome = createRef();
  scrollContact = createRef();

  scrollToContact = () =>{
    this.scrollContact.current.scrollIntoView({behavior:"smooth"});
  }
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
          <Progress home={this.scrollToHome} about={this.scrollToAbout} projects={this.scrollToProjects} contact = {this.scrollToContact} />
        </div>
        
        <div className="Card" ref={this.scrollHome}>
          <Home />
        </div> 
        
        <div className="Card" ref={this.scrollDiv}>
          <Project />
        </div>
        
        <div className="Card" ref={this.scrollAbout}>
          <About />
        </div>
        
        <div className="Card" ref= {this.scrollContact}>
            <Contact />
        </div>
      </div>
    );
  }
}