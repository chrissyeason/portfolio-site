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
      // isStateEmpty: false,
      isCoolStateEmpty: true,
      isMeowStateEmpty: false,
      isCakeStateEmpty: false,
    })
  }
  addMeow = ()=>{
    this.setState({
      ...this.state,
      // isStateEmpty: false,
      isMeowStateEmpty: true,
      isCoolStateEmpty: false,
      isCakeStateEmpty: false,
    })
  }
  addCake = ()=>{
    this.setState({
      ...this.state,
      isMeowStateEmpty: false,
      isCoolStateEmpty: false,
      isCakeStateEmpty: true,
    })
  }
  render(){
    return (
      <div className="App">
          <Navigation />
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

          <AddThumbButtons className="thumbnail-container"
                addCool={this.addCool} 
                addMeow={this.addMeow} 
                addCake={this.addCake}
                />
          

          </div>
      </div>
    );
  }
}

export default App;
