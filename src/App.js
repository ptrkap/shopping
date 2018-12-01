import React, { Component } from 'react';
import Input from './input/Input';
import Table from './table/Table';
import Total from './total/Total';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2 id="label">Shopping</h2>
        <Input />
        <Table />
        <Total />
      </div>
    );
  }
}

export default App;
