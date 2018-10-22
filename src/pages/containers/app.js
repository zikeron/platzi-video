import React, { Component, Fragment } from 'react';
import Videos from '../containers/videos';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer  from '../../reducers/index';
import { Map as map } from 'immutable';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../components/header';
import Home from '../components/home';
import Contacto from '../components/contacto';
import NotFound from '../components/not-found';
import Video from './video'

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
        applyMiddleware(
            logger,
            thunk
            )
    )
);

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/videos" component={Videos}/>
            <Route exact path="/videos/:id" component={Video}/>
            <Route exact path="/contacto" component={Contacto} />
            <Redirect exact from="/v" to="/videos"/>
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Provider>
    )
  }
}

export default App
