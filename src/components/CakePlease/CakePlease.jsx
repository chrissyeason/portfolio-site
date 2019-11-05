import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import './About.css';
import CakePleaseThumbnail from './thumbnail-cake-please.jpg';

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
            <div className="do-cool-shit-modal">
                <img src={CakePleaseThumbnail} color="white" onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}>About Chrissy</ModalHeader>
                <ModalBody>
                    
                </ModalBody>
            
                </Modal>
            </div>        
        )  
    }  
}

export default CakePlease;