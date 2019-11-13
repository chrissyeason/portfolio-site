import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Resume from './ChrissyEason-Resume.jpg';
import ResumeDownload from './ChrissyEason-Resume.pdf';
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
                <ModalHeader className="modal-header" toggle={this.toggle}><h2>about</h2></ModalHeader>
                <ModalBody>
                <div className="modal-description">
                    <p>I earned my bachelors degree in Communication Arts from East Carolina University in 
                        Greenville, NC in 2004. Upon graduation, I gained a graphic design position at Igoe 
                        Creative, a small but fast-paced advertising agency. In two short years I was promoted 
                        to Creative Director. In this role, I challenged the creative department to step out 
                        of their comfort zones and find new ways to represent our clients. Together, we re-branded 
                        existing clients and created fresh, successful campaigns for new ones. 
                    </p>
                    <p>
                        While this position was fulfilling in many ways, I started to explore other creative 
                        outlets. In 2009 I applied to culinary school in Austin, TX and began a new adventure. 
                        After graduation, I bakery hopped for several years all the while picking up freelance 
                        graphic design jobs. 
                    </p>
                    <p>
                        It wasn’t until my freelance gigs started to gain steam that I realized I enjoy that 
                        work more than my 9-5. This realization was the driving force that landed me at General 
                        Assembly to pursue the Software Engineering program. I finally feel like I have found 
                        the career I’ve been seeking. I am looking for a company that values quality over quantity; 
                        a position where I am asked to think creatively every day, and a team that works collaboratively.
                    </p>
                   
                </div>
                <hr/>
                <div className="modal-description">
                    <a href={ResumeDownload} download="ChrissyEason-Resume.pdf" id="download-link">Download Resume</a>
                    <br/>
                    <a href="http://linkedin.com/in/chrissy-eason-designs" target="_blank">linkedin.com/in/chrissy-eason-designs</a>
                    <br/>
                    <a href="http://github.com/chrissyeason" target="_blank">github.com/chrissyeason</a>
                    <br/>
                    
                </div>
                
                </ModalBody>
                
                </Modal>
            </div>        
        )  
    }  
}

export default About;