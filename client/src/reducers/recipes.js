import * as actions from '../actions/recipes';

const initialState = [];

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.RECENT_RECIPES_REQUESTED:
      return state;

    case actions.RECENT_RECIPES_SUCCEEDED:
      return {...state, recipes: action.recipes};

    default:
      return state;
  }
};

export default recipesReducer;
