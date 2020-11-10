import React,  { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import MainView from '../MainView/MainView'
import SingleBeerView from '../SingleBeerView/SingleBeerView'
import FavoriteContainer from '../FavoriteContainer/FavoriteContainer';
import { getRandomBeer } from '../apiCalls.js';
import { formatBeers } from '../cleanData.js';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      beer: {},
      viewFood: false,
      favorites: []
    }
  }

  serveBeer = () => {
    formatBeers()
    .then(singleBeer => this.setState({beer: singleBeer}))
  }

  showFood = () => {
    this.setState(state => ({
      viewFood: !state.viewFood
    }));
  }

  addToFavorites = (beer) => {
  this.state.favorites.push(beer)
}

  render() {
    return (
      <div className="App">
        <Route exact path ='/'>
          <MainView serveBeer={this.serveBeer}/>
        </Route>
        <Route exact path='/beer'>
          <SingleBeerView
            beer={this.state.beer}
            serveBeer={this.serveBeer}
            showFood={this.showFood}
            viewFood={this.state.viewFood} />
        </Route>
        < Route exact path ='/food'>
          <SingleBeerView beer={this.state.beer}
            foods={this.state.beer.foods}
            serveBeer={this.serveBeer}
            showFood={this.showFood}
            viewFood={this.state.viewFood}
            addToFavorites={this.addToFavorites}
          />
        </ Route>
        <Route exact path='/favorites'>
          <FavoriteContainer
            favorites={this.state.favorites}
            beer={this.state.beer}
            foods={this.state.beer.foods}
            serveBeer={this.serveBeer}
            showFood={this.showFood}
            viewFood={this.state.viewFood} />
        </Route>
      </div>
    );
  }
}

export default App;
App.propTypes = {
  beer: PropTypes.object,
  favorites: PropTypes.array,
  viewFood: PropTypes.bool,
  serveBeer: PropTypes.func,
  showFood: PropTypes.func,
  addToFavorites: PropTypes.func
}
