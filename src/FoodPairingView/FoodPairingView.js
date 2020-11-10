import React from 'react';
import PropTypes from 'prop-types';
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
    } else {
      return ''
    }
}


export default FoodPairingView;
FoodPairingView.propTypes = {
  beer: PropTypes.object
}
