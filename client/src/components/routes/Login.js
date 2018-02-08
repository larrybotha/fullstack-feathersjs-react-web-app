import {h} from 'preact';

import Main from '../Main';
import Login from '../forms/Login';

const LoginRoute = () => (
  <Main
    render={() => (
      <div>
        <h1>Log in</h1>
        <Login />
      </div>
    )}
  />
);

export default LoginRoute;
