import {h, Component} from 'preact';

import Main from '../Main';
import RecipeList from '../RecipeList';

const Home = () => (
  <Main
    render={({requestRecentRecipes, recipes}) => (
      <RecipeList
        requestRecentRecipes={requestRecentRecipes}
        recipes={recipes}
      />
    )}
  />
);

export default Home;
