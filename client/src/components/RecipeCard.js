import {h} from 'preact';
import {Card} from 'semantic-ui-react';

const RecipeCard = ({recipe}) => (
  <Card centered>
    <Card.Header content={recipe.name} />
    <Card.Meta content="Description" />
    <Card.Description content={recipe.ingredients} />
  </Card>
);

export default RecipeCard;
