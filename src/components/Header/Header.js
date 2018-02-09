import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
const shelfieLogo = require('../../assets/shelfie-logo.png');

class Header extends Component {
    constructor(){
        super();
        this.state = {
            header: 'SHELFIE',
            shelfA: 'Shelf A',
            shelfB: 'Shelf B',
            shelfC: 'Shelf C',
            shelfD: 'Shelf D'
        }
    }

    render(){
        return(<div className="header-container">            
            <img src = {shelfieLogo} alt = 'logo'/>
            <Link id = 'header-link' to = '/'><h1>{this.state.header}</h1></Link>                
          </div>);
    }

}

export default Header;