import {h, Component} from 'preact';

import Main from '../Main';
import Signup from '../forms/Signup';

const SignupRoute = () => <Main render={() => <Signup />} />;

export default SignupRoute;
