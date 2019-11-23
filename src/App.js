import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import DoCoolShit from './components/DoCoolShit/DoCoolShit';
import CakePlease from './components/CakePlease/CakePlease';
import MeowWoof from './components/MeowWoof/MeowWoof';
import Toggle from './Toggle';
import DoCoolShitThumbnail from './components/DoCoolShit/thumbnail.jpg';
import CakePleaseThumbnail from './components/CakePlease/thumbnail-cake-please.jpg';
import MeowWoofThumbnail from './components/MeowWoof/thumbnail.jpg';
import AddThumbButtons from './AddThumbButtons';
import LaVolpe from './components/LaVolpe/LaVolpe';
import CedarDoor from './components/CedarDoor/CedarDoor';
import Camp from './components/Camp/Camp';

class App extends Component {
  constructor(){
    super();
    this.state ={
      isStateEmpty: true,
  }
  
}
  componentDidMount = () => {
    fetch('http://localhost:3000/projects')
    .then(res =>res.json())
    .then(projects=>this.setState({
      projects: projects
    }))
    .catch(err=>console.log(err))

    fetch(`https://meow-woof-app.herokuapp.com/`,
    {mode: 'no-cors'})
    .then(res=>console.log('woke up meowwoof'))

    fetch(`https://do-cool-shit.herokuapp.com/`, 
    {mode: 'no-cors'})
    .then(res=>console.log('woke up do-cool-shit'))
  }
  addCool = () => {
    this.setState({
      ...this.state,
      isCoolStateEmpty: true,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeEmpty: false,
      isCedarDoorEmpty: false,
      isCampEmpty: false,
    })
  }
  addMeow = ()=>{
    this.setState({
      ...this.state,
      isMeowStateEmpty: true,
      isCoolStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeEmpty: false,
      isCedarDoorEmpty: false,
      isCampEmpty: false,
    })
  }
  addCake = ()=>{
    this.setState({
      ...this.state,
      isMeowStateEmpty: false,
      isCoolStateEmpty: false,
      isCakeStateEmpty: true,
      isLaVolpeEmpty: false,
      isCedarDoorEmpty: false,
      isCampEmpty: false,
    })
  }
  addLaVolpe = ()=>{
    this.setState({
      ...this.state,
      isMeowStateEmpty: false,
      isCoolStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeEmpty: true,
      isCedarDoorEmpty: false,
      isCampEmpty: false,
    })
  }
  addCedarDoor = ()=>{
    this.setState({
      ...this.state,
      isMeowStateEmpty: false,
      isCoolStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeEmpty: false,
      isCedarDoorEmpty: true,
      isCampEmpty: false,
    })
  }
  addCamp = ()=>{
    this.setState({
      ...this.state,
      isMeowStateEmpty: false,
      isCoolStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeEmpty: false,
      isCedarDoorEmpty: false,
      isCampEmpty: true,
    })
  }
  goHome = ()=>{
    this.setState({
      ...this.state,
      isMeowStateEmpty: false,
      isCoolStateEmpty: false,
      isCakeStateEmpty: false,
      isLaVolpeEmpty: false,
      isCedarDoorEmpty: false,
      isCampEmpty: false,
    })
  }
  render(){
    return (
      <div className="App">
          <Navigation goHome={this.goHome}/>
          <div >   

          {
            this.state.isCoolStateEmpty && <DoCoolShit />
          }
          
          {
            this.state.isMeowStateEmpty && <MeowWoof />
          }
          {
            this.state.isCakeStateEmpty && <CakePlease />
          }
          {
            this.state.isLaVolpeEmpty && <LaVolpe />
          }
          {
            this.state.isCedarDoorEmpty && <CedarDoor />
          }
          {
            this.state.isCampEmpty && <Camp />
          }
          <AddThumbButtons className="thumbnail-container"
                addCool={this.addCool} 
                addMeow={this.addMeow} 
                addCake={this.addCake}
                addLaVolpe={this.addLaVolpe}
                addCedarDoor={this.addCedarDoor}
                addCamp={this.addCamp}
                />
          

          </div>
      </div>
    );
  }
}

export default App;
