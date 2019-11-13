import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ResumeDownload from '../components/About/ChrissyEason-Resume.pdf';

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
                <Button color="white" onClick={this.toggle}><h5>contact</h5></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}><h2>contact</h2></ModalHeader>
                <ModalBody>
                <div className="modal-description" id="contact-info">
                    <p>919.922.0811</p>
                    <p>chrissyeason@gmail.com</p>
                    <a href={ResumeDownload} download="ChrissyEason-Resume.pdf" id="download-link">Download Resume</a>
                    <br/>
                    <a href="http://linkedin.com/in/chrissy-eason-designs" target="_blank">linkedin.com/in/chrissy-eason-designs</a>
                    <br></br>
                    <a href="http://github.com/chrissyeason" target="_blank">github.com/chrissyeason</a>
                </div>
                </ModalBody>
                </Modal>
            </div>        
        )  
    }  
}

export default Contact;