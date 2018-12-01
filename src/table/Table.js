import React, {Component} from 'react';
import './Table.css';

class Table extends Component {

    render() {
        return (
            <div>
                <table id="productsTable">
                    <thead>
                        <tr>
                            <th id="productsNameHeader">Product name</th>
                            <th id="productsPriceHeader">Price</th>
                            <th id="productsDiscountHeader">Discount</th>
                            <th className="image"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>product1</td>
                            <td>price1</td>
                            <td>-50%</td>
                            <td className="image"><img src={require("./subtract.png")} alt="Remove"/></td>
                        </tr>
                        <tr>
                            <td>product2</td>
                            <td>price2</td>
                            <td></td>
                            <td className="image"><img src={require("./subtract.png")} alt="Remove"/></td>
                        </tr>
                        <tr>
                            <td>product3</td>
                            <td>price3</td>
                            <td>-50%</td>
                            <td className="image"><img src={require("./subtract.png")} alt="Remove"/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;