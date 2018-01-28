import {takeEvery} from 'redux-saga';
import {fork, call, put} from 'redux-saga/effects';
import createHistory from 'history/createBrowserHistory';

import {getRecentRecipes} from '../services/api';
import * as actions from '../actions/recipes';

// when this function is called...
function* fetchRecentRecipes(feathersApp) {
  console.log('fetchRecentRecipes');
  // we call getRecentRecipes...
  // and then assign the result to recipes...
  const recipes = yield call(getRecentRecipes, feathersApp);

  // and then we dispatch RECENT_RECIPES_SUCCEEDED
  yield put({type: actions.RECENT_RECIPES_SUCCEEDED, recipes});
}

function* recentRecipesSaga(feathersApp) {
  console.log('recentRecipesSaga');
  yield* takeEvery(
    actions.RECENT_RECIPES_REQUEST,
    // we call this function
    fetchRecentRecipes,
    feathersApp
  );
}

function* root(feathersApp) {
  yield [fork(recentRecipesSaga, feathersApp)];
}

export default root;
