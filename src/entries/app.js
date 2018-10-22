import React, { Component, Fragment } from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../pages/containers/app'

const HomeContainer = document.getElementById('home-container')

//render(
hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , HomeContainer)
