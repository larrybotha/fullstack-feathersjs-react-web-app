import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {history} from '../store';

import * as actions from '../actions/user';
import {createUser} from '../services/user';

// the generator we call that makes fires the function that makes the request
// to our users service
// We pass it the action that was dispatched on the sign up page, and we
// deconstruct it so that we can pass the data to the function that will execute
// the call ot the API
const addUser = function* addUser(feathersApp, {email, password}) {
  // assign the response we get from the server after making a request to create
  // a user
  const response = yield call(createUser, feathersApp, {email, password});

  // once we have that response, we can call our action creator with the details
  // that we want stored in state
  yield put(actions.addUserSuccess({email: response.email}));

  // once that returns (this is all paused until the yield statements get a
  // result), we send the user to the login page. This is yielded... doesn't need
  // to, because this the history API will move us anyways, but probably good
  // practice to keep our generators consistent
  yield history.push('/login');
};

// create a saga for adding users
export const addUserSaga = function* addUserSaga(feathersApp) {
  // we subscribe to the USER_ADD_REQUEST action, and execute the addUser generator
  // The reason we say yield* is because we're delegating to another generator
  // It will yield each object returned to it.
  // So in addUser, we have multiple yields. We need this generator to yield
  // everything that the other generator yields.
  yield* takeEvery(actions.USER_ADD_REQUEST, addUser, feathersApp);
};
