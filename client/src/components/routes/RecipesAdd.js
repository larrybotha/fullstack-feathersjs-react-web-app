import {h, Component} from 'preact';
import {Divider} from 'semantic-ui-react';

import Main from '../Main';
import AddRecipe from '../AddRecipe';

const Home = () => {
  return (
    <Main
      render={() => (
        <div>
          <Divider />

          <AddRecipe />
        </div>
      )}
    />
  );
};

export default Home;
