import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import './About.css';
import CakePleaseThumbnail from './thumbnail-cake-please.jpg';
import CakePleaseHomepage from './homepage-cake-love.jpg';
import RecipesPage from './recipes-page.jpg';
class CakePlease extends Component{
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
                        </body>
                  
            </div>        
        )  
    }  
}

export default CakePlease;