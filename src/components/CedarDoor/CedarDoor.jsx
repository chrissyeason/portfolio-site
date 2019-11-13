import React, {Component} from 'react';
import CedarDoorLogo from './CedarDoor-logo-wood.jpg';
import EventBrochureCover from './CedarDoor-brochure-cover.jpg';
import EventBrochure1 from './CedarDoor-brochure-pg1.jpg';
import EventBrochure2 from './CedarDoor-brochure-pg2.jpg';
import EventBrochure3 from './CedarDoor-brochure-pg3.jpg';
import Signage from './CedarDoor-HappyHourSign.jpg';

class CedarDoor extends Component{
    constructor(props){
        super(props);
    
    }
    scrollToTop = () => {
        document.querySelector('#top-page').scrollIntoView({
            behavior: 'smooth'
        });
    }
    componentDidMount(){
        this.scrollToTop()    
    }
    render(){

      return(       
            <div className="show-page" id="top-page">
                    <body>
                        <div className="description">
                        <h2>Cedar Door Restaurant</h2>
                            <p>Signage and branding updates.
                            </p>
                            
                            
                        </div>
                        <div className="LV-img-container">
                            <img src={CedarDoorLogo}/>
                        </div> 
                        
                        <div className="LV-img-container">
                            <img src={EventBrochureCover}/>
                        </div>

                        <div className="LV-img-container">
                            <img src={EventBrochure1}/>
                        </div>

                        <div className="LV-img-container">
                            <img src={EventBrochure2}/>
                        </div>

                        <div className="LV-img-container">
                            <img src={EventBrochure3}/>
                        </div>

                        <div className="img-container" id="signage">
                            <img src={Signage}/>
                        </div>

                        <div className="space"></div>
                    </body>               
            </div>        
        )  
    }  
}

export default CedarDoor;