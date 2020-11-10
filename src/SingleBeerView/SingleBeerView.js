import React from 'react';
import { Link } from 'react-router-dom';
import FoodPairingView from '../FoodPairingView/FoodPairingView'
import PropTypes from 'prop-types';
import './singleBeerView.css';

function SingleBeerView(props) {

  if (props.viewFood) {
    return (
      <section className='single-beer'>
        <p>{props.beer.tagline}</p>
        <h1>{props.beer.name}</h1>
        <h2>Goes well with things like:</h2>
        <FoodPairingView foods={props.beer.foods} viewFood={props.viewFood}/>
        <button className='add-favorite-button' onClick={() => {props.addToFavorites(props.beer)}}>Add to Favorites</button>
        <Link to='/favorites'><button className='favorites-button'>Show Me My Favorites</button></Link>
        <Link to='/'><button className='single-beer-button' onClick={props.showFood}>I Want To See More Beers</button></Link>
      </section>
    )
  } else {
    return (
      <section className='single-beer'>
        <h3>{props.beer.name}</h3>
        <p>{props.beer.description}</p>
        <button className='single-beer-button' onClick={props.serveBeer}>I don't want this one</button>
        <Link to='/food'><button className='single-beer-button' onClick={props.showFood}>Sounds Great! Show me some food that goes with this!</button></Link>
      </section>
    )
  }
}

export default SingleBeerView;
SingleBeerView.propTypes = {
  favorites: PropTypes.array,
  beer: PropTypes.object,
  foods: PropTypes.array,
  serveBeer: PropTypes.func,
  showFood: PropTypes.func,
  viewFood: PropTypes.bool
}
