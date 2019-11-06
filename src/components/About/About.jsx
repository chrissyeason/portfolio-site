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
                <ModalHeader className="modal-header" toggle={this.toggle}>About Chrissy</ModalHeader>
                <ModalBody>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <img src={Resume}/>
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

export default About;