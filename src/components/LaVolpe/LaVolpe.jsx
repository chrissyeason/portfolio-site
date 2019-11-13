import React, {Component} from 'react';
import LaVolpeLogo from './LaVolpe-logo.png';
import LaVolpeBusinessCard from './LaVolpe-businesscard.png';
import EventBrochureCover from './LaVolpe-brochure-cover.jpg';
import EventBrochure1 from './LaVolpe-brochure-page1.jpg';
import EventBrochure2 from './LaVolpe-brochure-page2.jpg';
import EventBrochure3 from './LaVolpe-brochure-page3.jpg';
import Menu from './LaVolpe-menu.png';
import PostCardBack from './LaVolpe-Postcard-back.jpg';
import PostCardFront from './LaVolpe-Postcard-front.jpg';
import LoyaltyCard from './LaVolpe-loyaltyCard.jpg';

class LaVolpe extends Component{
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
            <div className="show-page"  id="top-page">
                    <body>
                        <div className="description">
                        <h2>La Volpe Branding Campaign</h2>
                            <p>New Austin restaurant full branding project: 
                                logo, business cards, menu, event brochure, 
                                loyalty card, promotional postcard
                            </p>
                            
                            
                        </div>
                        <div className="LV-img-container">
                            <img src={LaVolpeLogo}/>
                        </div> 
                        
                        <div className="LV-img-container">
                            <img src={LaVolpeBusinessCard}/>
                        </div>
                        
                        <div className="LV-img-container">
                            <img src={Menu}/>
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

                        <div className="LV-img-container">
                            <img src={PostCardFront}/>
                        </div>

                        <div className="LV-img-container">
                            <img src={PostCardBack}/>
                        </div>

                        <div className="img-container">
                            <img src={LoyaltyCard}/>
                        </div>
                        <div className="space"></div>
                    </body>               
            </div>        
        )  
    }  
}

export default LaVolpe;