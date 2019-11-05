import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import './About.css';
import DoCoolShitThumbnail from './thumbnail.jpg';

class DoCoolShit extends Component{
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
                <img src={DoCoolShitThumbnail} color="white" onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}>About Chrissy</ModalHeader>
                <ModalBody>
                    
                </ModalBody>
                <ModalFooter>
                    <p>linkedin.com/in/chrissy-eason-designs</p>
                    <br/>
                    <p>github.com/chrissyeason</p>
                </ModalFooter>
                </Modal>
            </div>        
        )  
    }  
}

export default DoCoolShit;