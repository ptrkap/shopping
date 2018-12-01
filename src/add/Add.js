import React, {Component} from 'react';
import './Add.css';

class Input extends Component {

    addProduct = () => {
        console.log("bar");
    }

    render() {
        return (
            <div id="add">
                <input id="productNameInput" placeholder="Product name"></input>
                <input id="productPriceInput" placeholder="Price"></input>
                <div id="productDiscountInput"><input type="checkbox"/ >Discount -50%</div>
                <img id="addProduct" src={require("./add.png")} alt="Add" onClick={this.addProduct}/>
            </div>
        );            
    }
}

export default Input;