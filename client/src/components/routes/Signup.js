import {h} from 'preact';

import Main from '../Main';
import Signup from '../forms/Signup';

const SignupRoute = () => (
  <Main
    render={() => (
      <div>
        <h1>Sign up</h1>

        <Signup />
      </div>
    )}
  />
);

export default SignupRoute;
