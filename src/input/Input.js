import React, {Component} from 'react';
import './Input.css';

class Input extends Component {

    addProduct = () => {
        console.log("bar");
    }

    render() {
        return (
            <div>
                <input id="productNameInput" placeholder="Product name"></input>
                <input id="productPriceInput" placeholder="Product price"></input>
                <input id="productAvailabilityInput" placeholder="Product availability"></input>
                <img id="addProduct" src={require("./add.png")} alt="Add" onClick={this.addProduct}/>
            </div>
        );            
    }
}

export default Input;