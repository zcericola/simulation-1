import React, {Component} from 'react';
import './Bin.css';
import { Link } from 'react-router-dom';

class Bin extends Component {
    constructor(){
        super();
        this.state = {
            bin: ['1', '2', '3', '4', '5']
        }

    }

    render(){
        //renders each bin dynamically
    let displayedNumber = this.state.bin.map( (curr, index) => {
        return( <Link className = 'bin-links' to = '/create' B><div key = {index} className = 'bin-container'><span>Bin {curr}</span></div></Link>);
    });
        return(<div className="bins-wrapper">
         {displayedNumber}       
          </div>);
    }
}

export default Bin;