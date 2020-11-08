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

function Images(){
    return(
        <div className="elements">
            <div className="column">
                <img src={react} alt="" className="imag"></img>
                <img src={java} alt="" className="imag"></img>
                <img src={python} alt="" className="imag"></img>
                <img src={postgres} alt="" className="imag"></img>
                <img src={c} alt="" className="imag"></img>
                <img src={cpp} alt="" className="imag"></img>
                <img src={css} alt="" className="imag"></img>
                </div>
                <div className="column">
                <img src={html} alt="" className="imag"></img>
                <img src={nginx} alt="" className="imag"></img>
                <img src={angular} alt="" className="imag"></img>
                <img src={bootstrap} alt="" className="imag"></img>
                </div>
        </div>
    );
}

export default Images;