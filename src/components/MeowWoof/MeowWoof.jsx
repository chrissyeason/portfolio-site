import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import MeowWoofThumbnail from './thumbnail.jpg';
import HomePage from './home-page.jpg';
import indexPage from './index-page.jpg';
import DogListPage from './dog-list-page.jpg';

class MeowWoof extends Component{
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
                <img src={MeowWoofThumbnail} color="white" onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}><h2>MeowWoof Rescue Mission</h2></ModalHeader>
                <ModalBody>
                    <div className="modal-description">
                        <p>Meow Woof Rescue Mission was a group project. It is a full-stack application that uses 
                            JavaScript, Express, and MongoDB to allow users to login
                            and save their foster pet's information to the database and view 
                            other available pets.
                        </p>
                        <a href="https://meow-woof-app.herokuapp.com/" target="_blank">meow-woof-app.herokuapp.com</a>
                    </div>
                    <div className="img-container">
                        <img src={HomePage}/>
                    </div>
                    <div className="img-container">
                        <img src={indexPage}/>
                    </div>
                    <div className="img-container">
                        <img src={DogListPage}/>
                    </div>
                    <hr/>
                    <div className="space"></div>
                </ModalBody>
            
                </Modal>
            </div>        
        )  
    }  
}

export default MeowWoof;