import React from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import FoodPairingView from '../FoodPairingView/FoodPairingView'
import './favoriteContainer.css';

const FavoriteContainer = ({favorites}) => {
  console.log(favorites)
  return (
      <section className='favorite-container'>
        <>
          { favorites.map(favorite => {
              return <FavoriteCard
              name={favorite.name}
              description={favorite.description} />
            })
          }
        </>
      </section>
  )
}
export default FavoriteContainer;
