import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodPairingView from '../FoodPairingView/FoodPairingView';
import './favoriteCard.css';

const FavoriteCard = ({name, description}) => {

  return (
    <section className='favorite-card'>
        <h1 className='favorite-name'>{name}</h1>
        <h2 className='favorite-description'>{description}</h2>
      </section>
  )
}

export default FavoriteCard;
