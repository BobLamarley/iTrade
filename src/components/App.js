import React, { Component } from 'react';
import logo from '../logo.svg';
import { Provider } from 'react-redux'

import './App.css';
import CryptoGrid from './home/CryptoGrid'


class App extends Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <CryptoGrid />
        </div>
    </Provider>
    );
  }
}

export default App;
