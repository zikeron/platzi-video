import React, { Component } from 'react';
import { render } from 'react-dom';
//import Playlist from '../components/playlist';
//import Categories from '../components/categories';
import data from '../api.json';
import Home from '../pages/containers/home';

const HomeContainer = document.getElementById('home-container')
render(<Home data={ data }/>, HomeContainer)
