import React, { Component } from 'react';
import logo from './crest.svg';
import './App.css';
import Counter from './Counter';
import Clock from './Clock';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Clock />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style={{ letterSpacing: '12px' }}>306日式料理餐廳</h1>
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
