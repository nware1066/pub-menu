import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodPairingView from '../FoodPairingView/FoodPairingView';

function FavoriteCard(props) {
  return (
    <article className='favorite'>
      <h1>{this.props.beer.name}</h1>
      <h3>{this.props.beer.discription}</h3>
      <FoodPairingView />
      <button className='favorite-button'>Add to Favorites</button>
    </article>
  )
}

export default FavoriteCard;
