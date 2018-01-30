import {takeEvery} from 'redux-saga';
import {fork, call, put} from 'redux-saga/effects';

import {history} from '../store';

import {createRecipe, getRecentRecipes} from '../services/api';
import * as actions from '../actions/recipes';

// This function is called from recentRecipesSaga when the
// RECENT_RECIPES_REQUEST action is dispatched
function* fetchRecentRecipes(feathersApp) {
  // Not sure what's going on here yet - need to do a course on redux-saga.
  // We make an async request using getRecentRecipes - a function defined in
  // our api service. That function expects a feathers app to be passed through.
  // This looks similar to Object.prototype.call.
  // We call getRecentRecipes, passing feathersApp as the application against
  // which the call will be made.
  const recipes = yield call(getRecentRecipes, feathersApp);

  // Once we have a response, and the response is assigned to recipes,
  // we dispatch RECENT_RECIPES_SUCCESS. Our reducer receives the recipes object
  // in the action, and we udpate our state in the reducer accordingly.
  // Why do we use put here? Is this related to REST? Surely not - we have call
  // and fork.
  // Again... need to do a redux-saga course.
  yield put({type: actions.RECENT_RECIPES_SUCCESS, recipes});
}

// this is a saga - something that listens to actions being dispatched so we can
// perform side effects? Is that what a saga is? A function for making async
// calls when an action is dispatched?
function* recentRecipesSaga(feathersApp) {
  // why is this async?
  // what does takeEvery do?
  // Wow... that redux-saga course can't come too soon, it seems
  yield* takeEvery(
    // so, whenever RECENT_RECIPES_REQUEST is dispatched...
    actions.RECENT_RECIPES_REQUEST,
    // we call fetchRecentRecipes
    fetchRecentRecipes,
    // and this is the app we pass through against which requests will be made.
    feathersApp
  );
}

// this is the 'handler' for when ADD_RECIPE is fired.
// Like reducers, this function receives the action object that the actionCreator
// returns.
// We only care about the data sent via the action, and will use that data to
// create a recipe.
function* addRecipe(feathersApp, {name, ingredients, description, imageUrl}) {
  // We call createRecipe - a function we added in our services/api.js which
  // abstracts communication between our client and server.
  // We pass that function our feathers app, from which it will retrieve the
  // service we will use to create the recipe, and also pass it the data that
  // is required to create a recipe.
  const response = yield call(createRecipe, feathersApp, {
    name,
    ingredients,
    description,
    imageUrl,
  });

  // once we get that response we can do anything with it. We can dispatch an
  // action and handle it in our reducer if need be - say append the recipe to
  // the existing recipes.
  yield put({type: actions.ADD_RECIPE_SUCCESS, response});
  // once that is done, navigate the user to the home page
  yield history.push('/');
}

// we create a saga for adding a recipe. This is what the root saga will fork
function* addRecipeSaga(feathersApp) {
  // this saga subscribes to ADD_RECIPE being dispatched from the view
  // We then provide the function that needs to be called in response to the
  // action, and pass along our feathers app, too
  yield* takeEvery(actions.ADD_RECIPE, addRecipe, feathersApp);
}

// our root saga.
// It receives the application against which we will be making requests
function* root(feathersApp) {
  // fork... why fork? So many unknowns right now.
  // This appears to be a list of sagas that will allow us to handle multiple
  // actions being dispatched from our UI.
  // This ties all of our sagas together.
  yield [
    fork(recentRecipesSaga, feathersApp),
    fork(addRecipeSaga, feathersApp),
  ];
}

// export the root saga. Let's take a look at where we import this...
export default root;
