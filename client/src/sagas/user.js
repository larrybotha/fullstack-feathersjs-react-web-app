import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {history} from '../store';

import * as actions from '../actions/user';
import {createUser} from '../services/user';

const addUser = function* addUser(feathersApp, {username, password}) {
  const response = yield call(createUser, feathersApp, {username, password});

  yield put(actions.addUserSuccess({username: response.username}))
};

export const addUserSaga = function* addUserSaga(feathersApp) {
  yield* takeEvery(actions.USER_ADD, addUser, feathersApp);
};
