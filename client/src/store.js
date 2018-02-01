import {createStore, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import createApp from './services';

// we pull our sagas in here
import sagas from './sagas';
// and our reducers here
import rootReducer from './reducers';

const defaultStore = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  defaultStore,
  compose(
    applyMiddleware(sagaMiddleware),
    process.env.NODE_ENV === 'development' && window.devToolsExtension
      ? window.devToolsExtension()
      : f => f
  )
);

const app = createApp();

// we run our sagas specifying the app against which we will make requests
sagaMiddleware.run(sagas, app);

const history = createHistory();

export {app, history};

export default store;
