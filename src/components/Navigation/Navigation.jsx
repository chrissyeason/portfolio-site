import React from 'react';
import About from '../About/About';
import Contact from '../Contact';
import './Navigation.css';

function Navigation(props){
    return(
        <div className="nav-bar">
            <div className="nav-header-left" id="nav-header-left-small">
                <button onClick={props.goHome} id="home-button"><h4>Chrissy Eason</h4></button>
                <h5>frontend developer | designer</h5>
            </div>
            
            <div className="nav-right">
                <About />
                <Contact />
            </div>
        </div>
    )
}

export default Navigation;