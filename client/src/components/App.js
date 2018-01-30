import {h, Component} from 'preact';
import {Switch, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import {history} from '../store';
import Home from './routes/Home';
import RecipesAdd from './routes/RecipesAdd';

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/recipes/add" component={RecipesAdd} />
    </Switch>
  </ConnectedRouter>
);

export default App;
