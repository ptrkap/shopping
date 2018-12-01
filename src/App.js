import React, { Component } from 'react';
import Input from './input/Input';
import Table from './table/Table';
import Total from './total/Total';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Shopping</h2>
        <Input />
        <Table />
        <Total />
      </div>
    );
  }
}

export default App;
