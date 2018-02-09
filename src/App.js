import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shelf from './components/Shelf/Shelf';
import routes from './routes';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
       
      <div className="App">            
          <header className="App-header">   
                <Header />                    
                  </header>   
             {routes}       
     
      </div>
    );
  }
}

export default App;
