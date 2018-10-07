import React, { Component } from 'react';
import { render } from 'react-dom';
// import Playlist from '../components/playlist';
// import Categories from '../components/categories';
// import data from '../api.json';
import Home from '../pages/containers/home';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer  from '../reducers/index';
import { Map as map } from 'immutable';
// import data from '../schemas/index'

// const initialState = {
//     // reducer 1
//     data: {
//         // ...data,
//         entities: data.entities,
//         categories: data.result.categories,
//         search:[]
//     },
//     // reducer 2
//     modal: {
//         visibility: false,
//         mediaId: null,
//     }
// }

// console.dir(data)
// console.dir(normalizedData)

const store = createStore(
    reducer,// reducer
    map(), // initialState
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //enhacer
);

//console.dir(store.getState());
const HomeContainer = document.getElementById('home-container')

render(
    <Provider store={store}>
        <Home />
    </Provider>
    , HomeContainer)
