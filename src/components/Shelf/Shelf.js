import React, {Component} from 'react';
import './Shelf.css';
import { Link } from 'react-router-dom';

class Shelf extends Component {
    constructor(){
        super();
        this.state = {
            shelf: ['A', 'B', 'C', 'D']
        }

    }

    render(){
        //renders each shelf dynamically
    let displayedLetter = this.state.shelf.map( (curr, index) => {
    return( <Link className = 'shelf-links' to = {`/shelf/bins/${curr}`}><div key = {index} className = 'shelf-container'><span>Shelf {curr}</span></div></Link>);
    });

        return(<div className="shelves-wrapper">
         {displayedLetter}       
          </div>);
    }
}

export default Shelf;