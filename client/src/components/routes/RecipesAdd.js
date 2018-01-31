import {h, Component} from 'preact';

import Main from '../Main';
import AddRecipe from '../AddRecipe';

const RecipesAdd = () => <Main render={() => <AddRecipe />} />;

export default RecipesAdd;
