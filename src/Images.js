import './Images.css';
import react from './files/react.png';
import java from './files/java.png';
import python from './files/python.png';
import postgres from './files/PGLogo.png';
import c from './files/C.png';
import cpp from './files/C++.png';
import css from './files/css3.svg';
import html from './files/html.png';
import nginx from './files/nginx.svg';
import angular from './files/angular.png';
import bootstrap from './files/bootstrap.svg';
import node from './files/node.png';
import adobe from './files/adobe-illustrator.png';
import aws from './files/aws-ec2.svg';
import figma from './files/figma.png';
import qlogo from './files/qLogo.png';

function Images(){
    return(
        <div className="elements">
            <div className="column">
                <img src={react} alt="" className="imag"></img>
                <img src={java} alt="" className="imag"></img>
                <img src={python} alt="" className="imag"></img>
                <img src={postgres} alt="" className="imag"></img>
                </div>
                <div className="column">
                <img src={c} alt="" className="imag"></img>
                <img src={cpp} alt="" className="imag"></img>
                <img src={css} alt="" className="imag"></img>
                <img src={html} alt="" className="imag"></img>
                </div>
                <div className="column">
                <img src={node} alt="" className="imag"></img>
                <img src={aws} alt="" className="imag"></img>
                <img src={adobe} alt="" className="imag"></img>
                <img src={nginx} alt="" className="imag"></img>
                </div>
                <div className="column">
                <img src={angular} alt="" className="imag"></img>
                <img src={bootstrap} alt="" className="imag"></img>
                <img src={figma} alt="" className="imag"></img>
                <img src={qlogo} alt="" className="imag"></img>
                </div>
        </div>
    );
}

export default Images;