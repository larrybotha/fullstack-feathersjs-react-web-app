import {h, Component} from 'preact';
import {Divider} from 'semantic-ui-react';

import Main from '../Main';
import RecipeList from '../RecipeList';

const Home = () => {
  return (
    <Main
      render={({requestRecentRecipes, recipes}) => (
        <div>
          <Divider />

          <RecipeList
            requestRecentRecipes={requestRecentRecipes}
            recipes={recipes}
          />
        </div>
      )}
    />
  );
};

export default Home;
