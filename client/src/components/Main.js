import {h, Component} from 'preact';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {Header, Container} from 'semantic-ui-react';
import * as actions from '../actions/recipes';

// this is the main layout component that wraps routes
// Overkill, but we're passing all state down to whatever component is a child
const Main = ({render, ...restProps}) => (
  <Container>
    <Header as="h1" textAlign="center">
      <Link to="/">Menu monkey</Link>

      {render({...restProps})}
    </Header>
  </Container>
);

// get the recipes from state.
// By default recipes is an empty array. Once we make a request for the recipes
// we update state in the reducer, and the recipes are then available in the store
const mapStateToProps = ({recipes}) => ({recipes});

// These are all the actions available via our recipe actions. The only one we
// care about in the UI is requestRecentRecipes. We fire that to get the recipes
// on the RecipeList's component's componentWillMount.
// We should rather connect that component, because we're passing all this state
// all the way down instead of just doing it there.
const mapDispatchToProps = {...actions};

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
