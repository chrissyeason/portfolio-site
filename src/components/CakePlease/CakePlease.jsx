import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import './About.css';
import CakePleaseThumbnail from './thumbnail-cake-please.jpg';
import CakePleaseHomepage from './homepage-cake-love.jpg';
import RecipesPage from './recipes-page.jpg';
class CakePlease extends Component{
    constructor(props){
        super(props);
        this.state ={
            modal:false
        }
        this.toggle = this.toggle.bind(this);
        console.log(props)

    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    render(){

      return(       
            <div className="modal-thumbnail">
                <img src={CakePleaseThumbnail} color="white" onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}>
                    <h2>Cake Please Recipes App</h2>
                    
                </ModalHeader>
                <ModalBody>
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
                </ModalBody>
            
                </Modal>
            </div>        
        )  
    }  
}

export default CakePlease;