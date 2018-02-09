import React, { Component } from 'react';
import './Home.css';
import Header from '.././Header/Header';
import Shelf from '.././Shelf/Shelf';

class Home extends Component {
    
  render() {
    return (
      <div className="Home">       
      <Shelf />      
      </div>
    );
  }
}

export default Home;