import React from 'react';
import './Total.css';

export default function(props) {
    return (
        <h3 id="summary">
            Total: <span id="productsTotal">{calculateTotal(props.products)}</span>
        </h3>
    );
}

function calculateTotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        if (products[i].discount) {
            total += products[i].price/2;
        } else {
            total += products[i].price;
        }
    }
    return total.toFixed(2);
}