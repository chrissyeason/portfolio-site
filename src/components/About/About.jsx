import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Resume from './resume.jpg';
import './About.css';

class About extends Component{
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
            <div className="about-modal">
                <Button color="white" onClick={this.toggle}><h5>about</h5></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}><h2>about me</h2></ModalHeader>
                <ModalBody>
                <div className="modal-description">
                    <p>I’m a frontend developer with a colorful career. I’ve played the 
                        role of graphic designer, creative director, pastry chef, 
                        cake decorator, manager, and most recently full-stack developer. 
                        Combining clean code and responsive design really lights me up!  
                    </p>
                    
                    <p>
                        When I’m not playing with code I enjoy rock climbing, 
                        hiking and really all things outdoors. 
                    </p>
                </div>
                <div className="img-container">
                    <img src={Resume} id="resume-container"/>
                </div>
                <hr/>
                <div className="modal-description">
                    <a href="http://linkedin.com/in/chrissy-eason-designs" target="_blank">linkedin.com/in/chrissy-eason-designs</a>
                    <br/>
                    <a href="http://github.com/chrissyeason" target="_blank">github.com/chrissyeason</a>
                </div>
                <hr/>
                    <div className="space"></div>
                </ModalBody>
                
                </Modal>
            </div>        
        )  
    }  
}

export default About;