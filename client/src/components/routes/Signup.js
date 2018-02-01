import {h, Component} from 'preact';

import Main from '../Main';
import Signup from '../forms/Signup';

const RecipesAdd = () => <Main render={() => <Signup />} />;

export default RecipesAdd;
