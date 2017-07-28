import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// when an action creator returns an action that contains a promise, this middleware
// executes the promise before the action get into the reducers.
// once the promise finishes the middleware delivers a new action of the same type but with a payload
// that is the result of the promise instead of the promise itself.
import ReduxPromise from "redux-promise";

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
