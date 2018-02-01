import {h, Component} from 'preact';

import Main from '../Main';
import Login from '../forms/Login';

const LoginRoute = () => <Main render={() => <Login />} />;

export default LoginRoute;
