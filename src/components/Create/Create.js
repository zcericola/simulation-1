import React, {Component} from 'react';
import './Create.css';


class Create extends Component {
    constructor(){
        super();

        this.state = {};
    }

    render(){
        return(
            <div>
                <form>
                    <label for = 'name'>Name:</label>
                    <input type = 'text' className = 'create-input' name = 'product-name'/>
                    <label for = 'price'>Price:</label>
                    <input type = 'text' className = 'create-input' name = 'product-price'/>
                    <button className = 'create-button' id = 'edit'>Edit</button>
                    <button className = 'create-button' id = 'delete'>Delete</button>

                </form>
            </div>
        );
    }
}

export default Create;