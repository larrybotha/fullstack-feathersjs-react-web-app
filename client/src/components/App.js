import {h, Component} from 'preact';
import {Switch, Redirect, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import {history} from '../store';
import Home from './routes/Home';
import RecipesAdd from './routes/RecipesAdd';
import SingleRecipe from './routes/SingleRecipe';
import Signup from './routes/Signup';
import Login from './routes/Login';

import routes from '../routes';

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Redirect exact from={routes.recipes} to={routes.home} />
      <Route exact path={routes.recipesAdd} component={RecipesAdd} />
      <Route exact path={routes.recipeItem} component={SingleRecipe} />
      <Route exact path={routes.signup} component={Signup} />
      <Route exact path={routes.login} component={Login} />
    </Switch>
  </ConnectedRouter>
);

export default App;
