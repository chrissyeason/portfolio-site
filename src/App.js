import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import DoCoolShit from './components/DoCoolShit/DoCoolShit';
import CakePlease from './components/CakePlease/CakePlease';
import MeowWoof from './components/MeowWoof/MeowWoof';

class App extends Component {
  constructor(){
    super();
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
  render(){
    return (
      <div className="App">
          <Navigation />
          <div className="thumbnail-container">        
            <DoCoolShit />
            <CakePlease />
            <MeowWoof />
          </div>
      </div>
    );
  }
}

export default App;
