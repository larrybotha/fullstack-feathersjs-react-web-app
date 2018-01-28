import {h, Component} from 'preact';
import {Provider} from 'react-redux';

import App from './App';
import store from '../store';

// our provider which makes state available to all connected components via context,
// but then abstracts that away from us and exposes the store via props and
// mapStateToProps
const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppProvider;
