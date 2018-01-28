import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import recipesReducer from './recipes';

const reducer = combineReducers({
  recipes: recipesReducer,
  router: routerReducer,
});

export default reducer;
