import React, {Component} from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import './About.css';
import DoCoolShitThumbnail from './thumbnail.jpg';
import AdventureHomepage from './adventure-home-page.jpg';
import AdventureShowpage from './adventure-show-modal.jpg';
import AdventureChatpage from './chat-page.jpg'
class DoCoolShit extends Component{
    constructor(props){
        super(props);
    //     this.state ={
    //         on: false,
    //     }
    //     this.toggle = this.toggle.bind(this);
    //     console.log(props)

    // }
    // toggle() {
    //     this.setState(prevState => ({
    //       on: !prevState.on,
    //     }));
    //     this.props.addCool();
    }
    scrollToTop = () => {
        document.querySelector('#top-page').scrollIntoView({
            behavior: 'smooth'
        });
    }
    componentDidMount(){
        this.scrollToTop()    
    }
    render(){

      return(       
            <div >
                    <h2 id="top-page">Do Cool Shit Adventure App</h2>
                    
                    <body>
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
                    </body>               
            </div>        
        )  
    }  
}

export default DoCoolShit;