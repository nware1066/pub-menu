import React,  { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import MainView from '../MainView/MainView'
import SingleBeerView from '../SingleBeerView/SingleBeerView'
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
        <Route exact path ='/'>
          <MainView serveBeer={this.serveBeer}/>
        </Route>
        <Route exact path='/beer'>
          <SingleBeerView beer={this.state.beer} serveBeer={this.serveBeer} />
        </Route>
        </header>
      </div>
    );
  }
}

export default App;
