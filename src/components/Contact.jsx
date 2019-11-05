import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import './About.css';

class Contact extends Component{
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
            <div className="contact-modal">
                <Button id="contact-button" color="white" onClick={this.toggle}>contact</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}>About Chrissy</ModalHeader>
                <ModalBody>
                    <p>919.922.0811</p>
                    <p>chrissyeason@gmail.com</p>
                    <p>linkedin.com/in/chrissy-eason-designs</p>
                    <p>github.com/chrissyeason</p>
                </ModalBody>
                </Modal>
            </div>        
        )  
    }  
}

export default Contact;