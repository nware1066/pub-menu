import React,  { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import MainView from '../MainView/MainView'
import { getRandomBeer } from '../apiCalls.js';
import { formatBeers } from '../cleanData.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      beer: {}
    }
  }

  serveBeer = () => {
    formatBeers()
    .then(singleBeer => this.setState({beer: singleBeer}))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainView serveBeer={this.serveBeer}/>
        </header>
      </div>
    );
  }
}

export default App;
