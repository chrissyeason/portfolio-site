import React from 'react';
import About from '../About/About';
import Contact from '../Contact';
import './Navigation.css';

function Navigation(){
    return(
        <div className="nav-bar">
            <h4>Chrissy Eason</h4>
            <div className="nav-right">
                <About />
                <Contact />
            </div>
        </div>
    )
}

export default Navigation;