import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer  from '../reducers/index';
import { Map as map } from 'immutable';


const store = createStore(
    reducer,// reducer
    map(), // initialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhacer
);

const HomeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>
    , HomeContainer)
