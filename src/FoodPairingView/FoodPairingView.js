import React from 'react';
import './foodPairingView.css'


function FoodPairingView(props) {
  let foodOption;
  if (props.foods) {
    foodOption = props.foods
    return foodOption.map(food => {
      return (
          foodOption = <p className='food-text' key={`${props.id}-${food}`}>{food} </p>
      )
    })
    console.log(foodOption)
    } else {
      return ''
    }
}


export default FoodPairingView;
