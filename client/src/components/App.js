import {h, Component} from 'preact';
import {connect} from 'react-redux';
import {Switch, Redirect, Route} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';

import {history} from '../store';
import Home from './routes/Home';
import RecipesAdd from './routes/RecipesAdd';
import SingleRecipe from './routes/SingleRecipe';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Profile from './routes/Profile';

import {authUserRequest} from '../actions/currentUser';

import routes from '../routes';

class App extends Component {
  componentWillMount() {
    const {authUserRequest} = this.props;

    authUserRequest();
  }

  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Redirect exact from={routes.recipes} to={routes.home} />
          <Route exact path={routes.recipesAdd} component={RecipesAdd} />
          <Route path={routes.recipeItem} component={SingleRecipe} />
          <Route exact path={routes.profile} component={Profile} />
          <Route exact path={routes.signup} component={Signup} />
          <Route exact path={routes.login} component={Login} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

const mapDispatchToProps = {
  authUserRequest,
};

export default connect(null, mapDispatchToProps)(App);
