import React, {Component} from 'react';
import './Add.css';
import {connect} from 'react-redux';

class Input extends Component {

    addProduct = () => {
        console.dir(document.getElementById("productDiscountInput"));
        this.props.addProduct({
            name: document.getElementById("productNameInput").value,
            price: Number(document.getElementById("productPriceInput").value),
            discount: document.getElementById("productDiscountInput").checked
        });
    }

    render() {
        return (
            <div id="add">
                <input id="productNameInput" placeholder="Product name"></input>
                <input id="productPriceInput" placeholder="Price"></input>
                <div id="productDiscountDiv"><input id="productDiscountInput" type="checkbox" />Discount -50%</div>
                <img id="addProduct" src={require("./add.png")} alt="Add" onClick={this.addProduct}/>
            </div>
        );            
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProduct: function(product) {
            return dispatch({
                type: "ADD_PRODUCT",
                product: product
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Input);
