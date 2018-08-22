import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
// import logger, {createLogger } from 'redux-logger';
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware';

import rootReducer from "./reducers";
import Routing from './router/router';


import App from './App';

// const middleware = applyMiddleware( thunk, promise() );

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'MyApp', actionsBlacklist: ['REDUX_STORAGE_SAVE']
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(thunk, promise()),
  // other store enhancers if any
);


const store = createStore(rootReducer, enhancer);

render(
<Provider store={store}>
    <Routing/>
</Provider>,
document.getElementById('root')
)

