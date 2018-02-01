import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {history} from '../store';
import * as actions from '../actions/user';

const addUser = function* addUser(feathersApp, {username, password}) {
  const response = call(createUser, feathersApp, {username, password});
};

export const addUserSaga = function* addUserSaga(feathersApp) {
  yield* takeEvery(actions.ADD_USER, addUser, feathersApp);
};
