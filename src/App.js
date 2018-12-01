import React, { Component } from 'react';
import Add from './add/Add';
import Table from './table/Table';
import Total from './total/Total';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
	render() {
		return (
			<div>
				<h2 id="label">Shopping</h2>
				<Add />
				<Table />
				<Total products={this.props.products}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state
	}
}

export default connect(mapStateToProps)(App);
