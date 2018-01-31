import {h, Component} from 'preact';
import {Switch, Redirect, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import {history} from '../store';
import Home from './routes/Home';
import RecipesAdd from './routes/RecipesAdd';
import SingleRecipe from './routes/SingleRecipe';

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect exact from="/recipes" to="/" />
      <Route exact path="/recipes/add" component={RecipesAdd} />
      <Route exact path="/recipes/:id" component={SingleRecipe} />
    </Switch>
  </ConnectedRouter>
);

export default App;
