import {h} from 'preact';

import Main from '../Main';
import Login from '../forms/Login';

const LoginRoute = props => {
  const {location} = props;
  return (
    <Main
      render={() => (
        <div>
          <h1>Log in</h1>
          <Login location={location} />
        </div>
      )}
    />
  );
};
export default LoginRoute;
