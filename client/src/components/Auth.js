import {h, Component} from 'preact';
import {connect} from 'react-redux';

import {history} from '../store';
import routes from '../routes';

import * as fromCurrentUser from '../selectors/currentUser';

class RequireAuth extends Component {
  componentWillMount() {
    // check auth when mounted
    this.checkAuth();
  }

  componentWillReceiveProps() {
    // and also when props change
    this.checkAuth();
  }

  checkAuth = () => {
    const {isLoggedIn, location} = this.props;

    // if the user is not logged in
    if (!isLoggedIn) {
      // get the path where they are
      const redirectAfterLogin = location.pathname;
      // and push them to log in, adding the current path as a query param which
      // will be used to redirect the user on log in
      history.push(`${routes.login}/?next=${redirectAfterLogin}`);
    }
  };

  render() {
    const {isLoggedIn, render, ...rest} = this.props;

    // use a render prop to render this component
    return isLoggedIn ? render(rest) : null;
  }
}

const mapStateToProps = ({currentUser}) => ({
  isLoggedIn: fromCurrentUser.isLoggedIn(currentUser),
});

export default connect(mapStateToProps, null)(RequireAuth);
