import {h, Component} from 'preact';
import {connect} from 'react-redux';

import Main from '../Main';
import RecipeList from '../RecipeList';

import {requestRecentRecipes} from '../../actions/recipes';

class Home extends Component {
  componentWillMount() {
    const {requestRecentRecipes} = this.props;

    requestRecentRecipes();
  }

  render() {
    const {recipes} = this.props;

    return <Main render={() => <RecipeList recipes={recipes} />} />;
  }
}

export {Home};

const mapStateToProps = ({recipes}) => {
  return {
    recipes: recipes.items,
  };
};

const mapDispatchToProps = {requestRecentRecipes};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
