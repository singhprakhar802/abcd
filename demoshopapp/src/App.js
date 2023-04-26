import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Item from './components/Item'
import ItemDate from './components/ItemDate';
class App extends Component {
  render() {
    return (
      <div>
        <Item name="Nirma"></Item>
        <ItemDate day="19" month="jan" year="2000"></ItemDate>

        <Item name="Surf-excel"></Item>
        <ItemDate day="20" month="july" year="2000"></ItemDate>

        <Item name="555"></Item>
        <ItemDate day="19" month="august" year="2000"></ItemDate>
        <div className="App">Hello</div>
      </div>
    );
  }
}

export default App;
