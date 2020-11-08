import React from 'react';
import { Route, Link } from 'react-router-dom';
import './singleBeerView.css';

function SingleBeerView(props) {

  return (
    <section className='single-beer'>
      <h3>{props.beer.name}</h3>
      <p>{props.beer.description}</p>
      <button className='single-beer-button' onClick={props.serveBeer}>I don't want this one</button>
    </section>
  )
}

export default SingleBeerView;
//
