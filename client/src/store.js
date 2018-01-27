import {createStore, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import fetch from 'isomorphic-fetch';
import feathers from '@feathersjs/feathers';
import authentication from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';

import sagas from './sagas';
import rootReducer from './reducers';

const defaultStore = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  defaultStore,
  applyMiddleware(sagaMiddleware)
);

const host = 'http://localhost:3030';

const app = feathers()
  .configure(rest(host).fetch(fetch))
  // .configure(feathers.hooks())
  .configure(authentication({store: window.localStorage}));

sagaMiddleware.run(sagas, app);

const history = createHistory();

export {app, history};

export default store;
