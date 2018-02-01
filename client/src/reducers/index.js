import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import recipesReducer from './recipes';
import userReducer from './user';

const reducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
  router: routerReducer,
});

export default reducer;
