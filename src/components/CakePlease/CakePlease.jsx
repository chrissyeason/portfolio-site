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
            <div className="modal-thumbnail">
                
                    <div>              
                        <body>
                            <h2 id="top-page">Cake Please Recipes App</h2>
                            <div className="modal-description">
                                <p>Ruby on Rails is combined a with PostgreSQL database and React to build this full stack application 
                                    that allows the cake community to collaborate by uploading their own recipes.</p>
                            </div>
                            <div className="img-container">
                                <img src={CakePleaseHomepage}/>
                            </div>
                                <hr/>
                            <div className="img-container">
                                <img src={RecipesPage}/>
                            </div>
                            <hr />
                            <div className="space"></div> 
                        </body>
                        </div> 

                
            </div>        
        )  
    }  
}

export default CakePlease;