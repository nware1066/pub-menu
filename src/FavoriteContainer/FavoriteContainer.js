import React from 'react';
import FavoriteCard from '../FavoriteCard/FavoriteCard';
import FoodPairingView from '../FoodPairingView/FoodPairingView'
import './favoriteContainer.css';

const FavoriteContainer = ({favorites}) => {
  console.log(favorites)
  return (
    <>
      <section>
        <h1>Some Favorites</h1>
        { favorites.map(favorite => {
            return <FavoriteCard name={favorite.name} description={favorite.description} />
        })
        }
        { favorites.foods.map(food => {
          return <p>{food.food}</p>
        })}
      </section>
    </>
  )
}
export default FavoriteContainer;
