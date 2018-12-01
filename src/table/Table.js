import React, {Component} from 'react';
import './Table.css';
import {connect} from 'react-redux';

class Table extends Component {

    removeProduct = (i) => () => {
        this.props.removeProduct(
            {
                id: i
            }
        );
    }

    render() {
        let that = this;
        const products = this.props.products.map(function(product, i) {
            return (
                <tr key={i}>
                    <td>{product.name}</td>
                    <td>{product.price.toFixed(2)}</td>
                    <td>{product.discount ? "-50%" : ""}</td>
                    <td className="image"><img src={require("./subtract.png")} alt="Remove" onClick={that.removeProduct(i)}/></td>
                </tr>
            );
        });

        if (products.length > 0) {
            return (
                <div>
                    <table id="productsTable">
                        <thead>
                            <tr>
                                <th id="productsNameHeader">Product name</th>
                                <th id="productsPriceHeader">Base price</th>
                                <th id="productsDiscountHeader">Discount</th>
                                <th className="image"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

function mapStateToProps(state) {
    return {
        products: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeProduct: function(product) {
            return dispatch({
                type: "REMOVE_PRODUCT",
                id: product.id
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);