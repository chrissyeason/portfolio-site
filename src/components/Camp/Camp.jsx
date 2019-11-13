import React, {Component} from 'react';
import CampPoster1 from './Camp-Poster1.jpg';
import CampPoster2 from './Camp-Poster2.jpg';

class Camp extends Component{
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
                        <h2>Camp Drunken Arrow Poster Art</h2>
     
                        </div>

                        <div className="LV-img-container">
                            <img src={CampPoster1}/>
                        </div> 
                        
                        <div className="LV-img-container">
                            <img src={CampPoster2}/>
                        </div>

                        <div className="space"></div>
                    </body>               
            </div>        
        )  
    }  
}

export default Camp;