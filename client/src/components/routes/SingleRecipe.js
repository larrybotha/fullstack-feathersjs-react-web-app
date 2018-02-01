import {h, Component} from 'preact';
import {Header, Image, Segment, Container} from 'semantic-ui-react';
import {connect} from 'react-redux';

import Main from '../Main';

import {fetchRecipe} from '../../actions/recipes';

const uiStates = {
  PENDING: 'pending',
  SUCCESS: 'success',
};

class SingleRecipe extends Component {
  state = {uiState: uiStates.PENDING};

  componentWillMount() {
    const {fetchRecipe, match, recipe} = this.props;

    if (!recipe) {
      fetchRecipe(match.params.id);
    } else {
      this.setState({uiState: uiStates.SUCCESS});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.recipe && nextProps.recipe) {
      this.setState({uiState: uiStates.SUCCESS});
    }
  }

  render() {
    const {uiState} = this.state;
    const {recipe} = this.props;

    return (
      <Main
        render={() =>
          uiState === uiStates.PENDING ? (
            <div>loading...</div>
          ) : (
            <div>
              <Header as="h1" textAlign="center">
                {recipe.name}
              </Header>

              {recipe.imageUrl ? (
                <Image size="medium" centered src={recipe.imageUrl} />
              ) : null}

              <Segment.Group>
                {recipe.ingredients.map(i => <Segment key={i}>{i}</Segment>)}
              </Segment.Group>

              <Container>
                {recipe.description
                  .split('\n')
                  .map((p, i) => <p key={i}>{p}</p>)}
              </Container>
            </div>
          )
        }
      />
    );
  }
}

const mapStateToProps = ({recipes}) => ({
  recipe: recipes.currentRecipe,
});

const mapDispatchToProps = {
  fetchRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleRecipe);
