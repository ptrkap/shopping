import React, {Component} from 'react';

class Input extends Component {

    render() {
        return (
            <div>
                <input id="productNameInput" placeholder="Product name"></input>
                <input id="productPriceInput" placeholder="Product price"></input>
                <input id="productAvailabilityInput" placeholder="Product availability"></input>
                <button id="addProduct">Add product button</button>
            </div>
        );            
    }
}

export default Input;