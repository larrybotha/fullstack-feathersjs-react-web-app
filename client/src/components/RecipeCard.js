import {h} from 'preact';
import {Card, Image} from 'semantic-ui-react';

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

      {recipe.ingredients}
    </Card.Content>
  </Card>
);

export default RecipeCard;
