import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './mainView.css';

function MainView(props) {
  return (
    <section className='main-view'>
      <h1>Welcome to the pub</h1>
      <Link to='/beer'><button className='beer-button' onClick={props.serveBeer}>Get me a beer!</button></Link>
      <p>Click the button and get a beer</p>
    </section>
  )
}

export default MainView;
MainView.propTypes = {
  serveBeer: PropTypes.func
}
