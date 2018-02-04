import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import recipesReducer from './recipes';
import currentUserReducer from './currentUser';

const reducer = combineReducers({
  currentUser: currentUserReducer,
  recipes: recipesReducer,
  router: routerReducer,
});

export default reducer;
