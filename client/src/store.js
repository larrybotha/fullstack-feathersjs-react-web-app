import {createStore, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import fetch from 'isomorphic-fetch';
import feathers from '@feathersjs/feathers';
import authentication from '@feathersjs/authentication-client';
import rest from '@feathersjs/rest-client';

// we pull our sagas in here
import sagas from './sagas';
// and our reducers here
import rootReducer from './reducers';

const defaultStore = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  defaultStore,
  applyMiddleware(sagaMiddleware)
);

const host = 'http://localhost:3030';

// we need to create our client-side feathers app here
const app = feathers()
  // we configure it specifying the type of application it is - a RESTful app,
  // and how we want to make requests. We want to use the fetch API, and I'm assuming
  // that the fetch polyfill we pass in is purely there for browsers which don't yet
  // support fetch.
  // In fact, no - if I don't provide fetch as a param the UI errors out.
  .configure(rest(host).fetch(fetch))
  // .configure(feathers.hooks())
  .configure(authentication({store: window.localStorage}));

// we run our sagas specifying the app against which we will make requests
sagaMiddleware.run(sagas, app);

const history = createHistory();

export {app, history};

export default store;
