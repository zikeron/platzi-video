import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer  from '../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// const logger = ({getState, dispatch}) => next => action =>{
//     console.log('este es mi estado viejo', getState().toJS())
//     console.log('vamos a enviar esta accion', action)
//     const value = next(action)
//     console.log('este es mi nuevo estado', getState().toJS())
//     return value
// }

const store = createStore(
    reducer,// reducer
    map(), // initialState
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhacer
    composeWithDevTools(
        applyMiddleware(logger)
    )
);

const HomeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>
    , HomeContainer)
