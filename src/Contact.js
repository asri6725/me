import './Contact.css';
import React, { Component } from 'react';
import autosize from 'autosize';

class Contact extends Component{
    componentDidMount(){
        this.textarea.focus();
        autosize(this.textarea);
     }
    render(){
        return(
            <div>
                <div className="SubHeading">
                    <p> Contact </p>
                </div>
                <div>
                    <form  action="https://formspree.io/f/mgepzzee" method="POST">
                    <p className="text"> To </p> 
                    <a href="mailto:abhinandan.srinivas@gmail.com?Subject=&body=" rel="noopener noreferrer" target="_blank" className="mailCss">abhinandan.srinivas@gmail.com</a>
                    <p className="text"> From </p>
                    <input type="text" name="_reployto" placeholder="Your contact"  />
                    <p className="text"> Message </p> 
                    <textarea type="text" name="message" placeholder="Your message" ref={c=>this.textarea=c} rows={1} defaultValue="" className="textplace" tabIndex={1} /> 
                    <input type="submit" value="Send" className="SecondaryButton" style={{"width":"40%"}}/>
                    </form>

                </div>
            </div>
        )
    }
}

export default Contact;