import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import './About.css';
import DoCoolShitThumbnail from './thumbnail.jpg';
import AdventureHomepage from './adventure-home-page.jpg';
import AdventureShowpage from './adventure-show-modal.jpg';
import AdventureChatpage from './chat-page.jpg'
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
            <div >
                <img src={DoCoolShitThumbnail} className="modal-thumbnail" onClick={this.toggle} />
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="Modal">
                <ModalHeader className="modal-header" toggle={this.toggle}>
                    <h2>Do Cool Shit Adventure App</h2>
                    
                </ModalHeader>
                <ModalBody>
                    <div className="modal-description">
                        <p>This app allows users to share their experiences by uploading details and even 
                            photos of places they've gone and adventures they have had. 
                            It uses Express and Mongodb as the back-end and ReactJS for the front-end. 
                            Once the user is logged in, there is an addtional chat feature that uses Socket.io.</p>
                        <a href="https://do-cool-shit.herokuapp.com/" target="_blank">do-cool-shit.herokuapp.com</a>
                    </div>
                    <div className="img-container">
                        <img src={AdventureHomepage}/>
                    </div> 
                    <hr/>
                    <div className="img-container">
                        <img src={AdventureShowpage}/>
                    </div>
                    <hr/>
                    <div className="img-container">
                        <img src={AdventureChatpage}/>
                    </div>
                    <hr/>
                    <div className="space"></div>
                </ModalBody>
                
                </Modal>
            </div>        
        )  
    }  
}

export default DoCoolShit;