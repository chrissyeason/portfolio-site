import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import MeowWoofThumbnail from './thumbnail.jpg';
import HomePage from './home-page.jpg';
import indexPage from './index-page.jpg';
import DogListPage from './dog-list-page.jpg';
import './MeowWoof.css';

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
            <div className="MeowWoof-modal">
                <img src={MeowWoofThumbnail} color="white" onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}>MeowWoof Rescue Mission </ModalHeader>
                <ModalBody>
                    <img src={HomePage}/>
                    <img src={indexPage}/>
                    <img src={DogListPage}/>
                </ModalBody>
            
                </Modal>
            </div>        
        )  
    }  
}

export default MeowWoof;