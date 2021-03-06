import React, { Component } from "react";
import './Progress.css';

export default class Progress extends Component{
    constructor(props){
        super(props);
        this.scrollToHome = this.scrollToHome.bind(this);
        this.scrollToAbout = this.scrollToAbout.bind(this);
        this.scrollToProjects = this.scrollToProjects.bind(this);
        this.scrollToContact = this.scrollToContact.bind(this);
    }

    scrollToHome(){
        this.props.home();
    }

    scrollToProjects(){
        this.props.projects();
    }

    scrollToAbout(){
        this.props.about();
    }

    scrollToContact(){
        this.props.contact();
    }


    render(){
        return(
            <div className = "progressbar">
                <a  onClick={this.scrollToHome}>Home</a>
                <a   onClick={this.scrollToProjects}> Projects </a>
                <a onClick={this.scrollToContact}> Contact </a>
                <a  onClick={this.scrollToAbout}> About </a>
            </div>
        );
        }
}