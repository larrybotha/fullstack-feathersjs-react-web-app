import {h, Component} from 'preact';
import {Card} from 'semantic-ui-react';

import RecipeCard from './RecipeCard';

class RecipeList extends Component {
  componentDidMount() {
    const {requestRecentRecipes} = this.props;

    if (typeof requestRecentRecipes === 'function') {
      requestRecentRecipes();
    }
  }

  render() {
    const {recipes} = this.props;

    return (
      <div>
        <Card.Group>
          {recipes.map((recipe, i) => <RecipeCard key={i} recipe={recipe} />)}
        </Card.Group>
      </div>
    );
  }
}

export default RecipeList;
