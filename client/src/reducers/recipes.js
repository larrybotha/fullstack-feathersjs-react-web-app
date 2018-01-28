import * as actions from '../actions/recipes';

// not great, but it'll do for now to leave recipes directly on the state.
// Should probably add them to an 'item's prop
const initialState = [];

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    // the saga dispatches this action when it gets a success. At the moment
    // there's no failure handler in there.
    case actions.RECENT_RECIPES_SUCCEEDED:
      return [...state, ...action.recipes];

    // we don't need to do anything when this action is fired for now.
    // We could set a loading state
    // With a finite state machine we could make it neater.
    case actions.RECENT_RECIPES_REQUEST:
    default:
      return state;
  }
};

export default recipesReducer;
