import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import DoCoolShit from './components/DoCoolShit/DoCoolShit';
import CakePlease from './components/CakePlease/CakePlease';
import MeowWoof from './components/MeowWoof/MeowWoof';
import AddThumbButtons from './AddThumbButtons';
import LaVolpe from './components/LaVolpe/LaVolpe';
import CedarDoor from './components/CedarDoor/CedarDoor';
import Camp from './components/Camp/Camp';

class App extends Component {
  constructor(){
    super();
    this.state ={
      // isStateEmpty: true,
      componentToShow: null,
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
      componentToShow: <DoCoolShit />
    })
  }
  addMeow = ()=>{
    this.setState({
      componentToShow: <MeowWoof />
    })
  }
  addCake = ()=>{
    this.setState({
      componentToShow: <CakePlease/>
    })
  }
  addLaVolpe = ()=>{
    this.setState({
      componentToShow: <LaVolpe />
    })
  }
  addCedarDoor = ()=>{
    this.setState({
      componentToShow: <CedarDoor />
    })
  }
  addCamp = ()=>{
    this.setState({
      componentToShow: <Camp />
    })
  }
  goHome = ()=>{
    this.setState({
      componentToShow: null,
    })
  }
  render(){
    return (
      <div className="App">
          <Navigation goHome={this.goHome}/>
          <div >   
          {
            this.state.componentToShow !== null &&
            this.state.componentToShow
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
