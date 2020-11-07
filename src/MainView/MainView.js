import React from 'react';
import { Link } from 'react-router-dom';
import './mainView.css';

function MainView(props) {
  return (
    <section className='main-view'>
      <h1>Welcome to the pub</h1>
      <button className='beer-button'></button>
      <p>Click the button and get a beer</p>
    </section>
  )
}

export default MainView;
//
