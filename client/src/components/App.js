import {h, Component} from 'preact';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import {history} from '../store';
import Home from './Home';

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </ConnectedRouter>
);

export default App;
