import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import DoCoolShit from './components/DoCoolShit/DoCoolShit';
import CakePlease from './components/CakePlease/CakePlease';
import MeowWoof from './components/MeowWoof/MeowWoof';

function App() {
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

export default App;
