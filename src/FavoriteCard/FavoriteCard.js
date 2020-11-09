import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodPairingView from '../FoodPairingView/FoodPairingView';
import './favoriteCard.css';

const FavoriteCard = ({name, description, foods}) => {

  return (
    <section className='favorite-card'>
        <h1 className='favorite-name'>{name}</h1>
        <h2 className='favorite-description'>{description}</h2>
        <FoodPairingView foods={foods}/>
      </section>
  )
}

export default FavoriteCard;
