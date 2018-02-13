import {h, Component} from 'preact';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {Menu} from 'semantic-ui-react';

import history from '../store';

import {getUserEmail, isLoggedIn} from '../selectors/currentUser';
import {logout} from '../actions/currentUser';

import routes from '../routes';

class NavBar extends Component {
  render() {
    const {isLoggedIn, logout, userEmail} = this.props;

    return (
      <Menu>
        <Menu.Item>
          <NavLink to={routes.home}>home</NavLink>
        </Menu.Item>

        <Menu.Item>
          <NavLink to={routes.recipesAdd}>Add Recipe</NavLink>
        </Menu.Item>

        {isLoggedIn ? (
          <Menu.Menu>
            <Menu.Item>
              <NavLink to={routes.profile}>{userEmail}</NavLink>
            </Menu.Item>

            <Menu.Item name="Log out" onClick={logout}>
              Log out
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu>
            <Menu.Item>
              <NavLink to={routes.login}>Login</NavLink>
            </Menu.Item>

            <Menu.Item>
              <NavLink to={routes.signup}>Signup</NavLink>
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

const mapStateToProps = ({currentUser}) => ({
  userEmail: getUserEmail(currentUser),
  isLoggedIn: isLoggedIn(currentUser),
});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
