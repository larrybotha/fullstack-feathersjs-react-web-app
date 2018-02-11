import {h} from 'preact';
import {Link} from 'react-router-dom';
import {Card, Image} from 'semantic-ui-react';

import routes from '../routes';

const RecipeCard = ({recipe}) => (
  <Card centered>
    <Card.Content>
      {recipe.imageUrl ? (
        <p>
          <Image src={recipe.imageUrl} />
        </p>
      ) : null}
      <Card.Header>{recipe.name}</Card.Header>
      <Card.Meta>Description</Card.Meta>
      <Card.Description>{recipe.description}</Card.Description>

      {recipe.ingredients ? <div>{recipe.ingredients.join(', ')}</div> : null}

      <Link to={`${routes.recipeItem.replace(/:id/, recipe._id)}`}>
        view recipe
      </Link>
    </Card.Content>
  </Card>
);

export default RecipeCard;
