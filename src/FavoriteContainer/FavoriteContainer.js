import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import './favoriteContainer.css';

const FavoriteContainer = ({favorites}) => {
  return (
      <section className='favorite-container'>
          { favorites.map(favorite => {
              return <FavoriteCard
              key={`${favorite.id}-${favorite.name}`}
              name={favorite.name}
              foods={favorite.foods}
              description={favorite.description} />
            })
          }
          <Link to='/'><button className='home-button'>Take Me Back</button></Link>
      </section>
  )
}
export default FavoriteContainer;

FavoriteContainer.propTypes = {
  favorite: PropTypes.object
}
