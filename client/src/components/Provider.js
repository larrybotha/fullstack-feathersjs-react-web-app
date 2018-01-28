import {h, Component} from 'preact';
import {Provider} from 'react-redux';

import App from './App';
import store from '../store';

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
