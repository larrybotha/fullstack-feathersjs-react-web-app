import {takeEvery} from 'redux-saga';
import {fork, call, put} from 'redux-saga/effects';
import {getRecentRecipes} from '../services/api';
import createHistory from 'history/createBrowserHistory';

import * as actions from '../actions/recipes';

function* fetchRecentRecipes(feathersApp) {
  // when this function is called, we call getRecentRecipes
  // and then assign the result to recipes
  const recipes = yield call(getRecentRecipes, feathersApp);

  // and then we dispatch RECENT_RECIPES_SUCCEEDED
  yield put({type: actions.RECENT_RECIPES_SUCCEEDED, recipes});
}

function* recentRecipesSaga(feathersApp) {
  yield* takeEvery(
    // whenever this action is called...
    actions.RECENT_RECIPES_REQUESTED,
    // we call this function
    fetchRecentRecipes,
    feathersApp
  );
}

function* root(feathersApp) {
  yield [fork(recentRecipesSaga, feathersApp)];
}

export default root;
