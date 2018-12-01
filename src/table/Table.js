import React, {Component} from 'react';

class Table extends Component {

    render() {
        return (
            <div>
                <table id="productsTable">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Product price</th>
                            <th>Product availability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>product1</td>
                            <td>price1</td>
                            <td>-50%</td>
                        </tr>
                        <tr>
                            <td>product2</td>
                            <td>price2</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>product3</td>
                            <td>price3</td>
                            <td>-50%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;