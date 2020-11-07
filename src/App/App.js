import React,  { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import MainView from '../MainView/MainView'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainView />
        </header>
      </div>
    );
  }
}

export default App;
