import React, {Component} from 'react';
import AdventureHomepage from './adventure-home-page.jpg';
import AdventureShowpage from './adventure-show-modal.jpg';
import AdventureChatpage from './chat-page.jpg';
import { ScrollTo } from '../../NavigationalHelpers';

class DoCoolShit extends Component{
    constructor(props){
        super(props);
    
    }
    componentDidMount(){
        ScrollTo();    
    }
    render(){

      return(       
            <div className="show-page"  id="top-page">
                <div className="description">
                <h2>Do Cool Shit Adventure App</h2>
                    <p>This app allows users to share their experiences by uploading details and even 
                        photos of places they've gone and adventures they have had. 
                        It uses Express and Mongodb as the back-end and ReactJS for the front-end. 
                        Once the user is logged in, there is an addtional chat feature that uses Socket.io.</p>
                    <a href="https://do-cool-shit.herokuapp.com/" target="_blank">do-cool-shit.herokuapp.com</a>
                    <br/>
                    <a href="https://github.com/chrissyeason/Adventure-App/" target="_blank">github.com/chrissyeason/Adventure-App</a>
                    
                </div>
                <div className="img-container">
                    <img src={AdventureHomepage}/>
                </div> 
                
                <div className="img-container">
                    <img src={AdventureShowpage}/>
                </div>
                
                <div className="img-container">
                    <img src={AdventureChatpage}/>
                </div>
                
                <div className="space"></div>
                                   
            </div>        
        )  
    }  
}

export default DoCoolShit;