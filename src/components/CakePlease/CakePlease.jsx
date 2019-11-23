import React, {Component} from 'react';
import CakePleaseHomepage from './homepage-cake-love.jpg';
import RecipesPage from './recipes-page.jpg';
import { ScrollTo } from '../../NavigationalHelpers';

class CakePlease extends Component{
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
                <h2>Cake Please Recipes App</h2>
                    <p>Ruby on Rails is combined a with PostgreSQL database and React to build this full stack application 
                        that allows the cake community to collaborate by uploading their own recipes.</p>
                </div>
                <div className="img-container">
                    <img src={CakePleaseHomepage}/>
                </div>
                    
                <div className="img-container">
                    <img src={RecipesPage}/>
                </div>
                
                <div className="space"></div> 
            </div>        
        )  
    }  
}

export default CakePlease;