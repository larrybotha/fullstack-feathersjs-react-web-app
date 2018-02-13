import {h, Component} from 'preact';
import {connect} from 'react-redux';

import Main from '../Main';
import RecipeList from '../RecipeList';

import {requestRecentRecipes} from '../../actions/recipes';
import {getRecipesByUserId} from '../../selectors/recipes';

class Profile extends Component {
  componentWillMount() {
    const {requestRecentRecipes} = this.props;

    requestRecentRecipes();
  }

  render() {
    const {recipes} = this.props;

    return <Main render={() => <RecipeList recipes={recipes} />} />;
  }
}

export {Profile};

const mapStateToProps = ({recipes, currentUser}) => {
  return {
    recipes: getRecipesByUserId(recipes, currentUser),
  };
};

const mapDispatchToProps = {requestRecentRecipes};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
