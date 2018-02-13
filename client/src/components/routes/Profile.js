import {h, Component} from 'preact';
import {connect} from 'react-redux';

import Main from '../Main';
import RecipeList from '../RecipeList';

import {requestUserRecipes} from '../../actions/currentUser';

class Profile extends Component {
  componentWillMount() {
    const {requestUserRecipes, user} = this.props;

    if (user) {
      this.requestRecipes(user);
    }
  }

  componentWillReceiveProps(nextProps) {
    const {user, recipes} = this.props;

    if (!user && nextProps.user && recipes.length === 0) {
      this.requestRecipes(nextProps.user);
    }
  }

  requestRecipes(user) {
    const {requestUserRecipes} = this.props;

    requestUserRecipes(user._id);
  }

  render() {
    const {recipes} = this.props;

    return (
      <Main
        render={() => (
          <div>
            {recipes.length ? (
              <RecipeList recipes={recipes} />
            ) : (
              <div>loading</div>
            )}
          </div>
        )}
      />
    );
  }
}

export {Profile};

const mapStateToProps = ({currentUser}) => {
  return {
    user: currentUser.user,
    recipes: currentUser.recipes,
  };
};

const mapDispatchToProps = {requestUserRecipes};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
