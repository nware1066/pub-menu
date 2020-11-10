import React from 'react';
import FoodPairingView from '../FoodPairingView/FoodPairingView';
import PropTypes from 'prop-types';
import './favoriteCard.css';

const FavoriteCard = ({id, name, description, foods}) => {

  return (
    <article className='favorite-card'>
        <h1 className='favorite-name'>{name}</h1>
        <h2 className='favorite-description'>{description}</h2>
        <FoodPairingView foods={foods}/>
      </article>
  )
}

export default FavoriteCard;

FavoriteCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  foods: PropTypes.array
}
