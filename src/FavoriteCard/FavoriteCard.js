import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FoodPairingView from '../FoodPairingView/FoodPairingView';
import './favoriteCard.css';

// function FavoriteCard(props) {
//   console.log(props)
//   return (
//     <article className='favorite'>
//       <h1 className='favorite-beer-name'>{props.name}</h1>
//       <h3>{props.description}</h3>
//       <button className='favorite-button'>Add to Favorites</button>
//     </article>
//   )
// }
const FavoriteCard = ({name, description}) => {
  return (
    <section>
      <h1>{name}</h1>
      <h2>{description}</h2>
    </section>
  )
}

export default FavoriteCard;
