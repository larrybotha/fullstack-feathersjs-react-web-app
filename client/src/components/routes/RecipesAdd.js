import {h, Component} from 'preact';

import Main from '../Main';
import AddRecipe from '../forms/AddRecipe';

const RecipesAdd = () => <Main render={() => <AddRecipe />} />;

export default RecipesAdd;
