import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class IndexComponent extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <p className="App-intro">
          Redux has been setup in the project.
          </p>
      </div>
    );
  }
}


export default IndexComponent;