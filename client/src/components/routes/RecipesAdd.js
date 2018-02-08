import {h} from 'preact';

import Main from '../Main';
import AddRecipe from '../forms/AddRecipe';
import Auth from '../Auth';

const RecipesAdd = props => (
  <Auth
    {...props}
    render={renderProps => (
      <Main render={() => <AddRecipe {...renderProps} />} />
    )}
  />
);

export default RecipesAdd;
