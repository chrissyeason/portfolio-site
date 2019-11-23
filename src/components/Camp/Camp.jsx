import React, {Component} from 'react';
import CampPoster1 from './Camp-Poster1.jpg';
import CampPoster2 from './Camp-Poster2.jpg';
import { ScrollTo } from '../../NavigationalHelpers';


class Camp extends Component{
    constructor(props){
        super(props);
    
    }
    componentDidMount(){
        ScrollTo();    
    }
    render(){

      return(       
            <div className="show-page" id="top-page">
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
            </div>        
        )  
    }  
}

export default Camp;