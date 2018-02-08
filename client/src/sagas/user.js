import {call, put, takeLatest} from 'redux-saga/effects';

import {history} from '../store';

import * as actions from '../actions/currentUser';
import * as userService from '../services/user';

import routes from '../routes';

// the generator we call that makes fires the function that makes the request
// to our users service
// We pass it the action that was dispatched on the sign up page, and we
// deconstruct it so that we can pass the data to the function that will execute
// the call ot the API
const addUser = function* addUser(feathersApp, {email, password}) {
  // assign the response we get from the server after making a request to create
  // a user
  const response = yield call(userService.createUser, feathersApp, {
    email,
    password,
  });

  // once we have that response, we can call our action creator with the details
  // that we want stored in state
  yield put(actions.addUserSuccess({email: response.email}));

  // once that returns (this is all paused until the yield statements get a
  // result), we send the user to the login page. This is yielded... doesn't need
  // to, because this the history API will move us anyways, but probably good
  // practice to keep our generators consistent
  yield history.push(routes.login);
};

// create a saga for adding users
export const addUserSaga = function* addUserSaga(feathersApp) {
  // we subscribe to the USER_ADD_REQUEST action, and execute the addUser generator
  // The reason we say yield* is because we're delegating to another generator
  // It will yield each object returned to it.
  // So in addUser, we have multiple yields. We need this generator to yield
  // everything that the other generator yields.
  yield takeLatest(actions.USER_ADD_REQUEST, addUser, feathersApp);
};

// attempt to log a user in. This is the handler for our loginSaga
// This handler receives the data in the dispatched action on the log in form
const tryLogin = function* tryLogin(feathersApp, {email, password, nextRoute}) {
  // we store the user we get in the response from making a request against
  // our API
  const response = yield call(userService.login, feathersApp, {
    email,
    password,
  });

  // if we have a use
  if (response.accessToken) {
    // dispatch the loginSuccess action, sending through the user data returned
    yield put(actions.loginSuccess({currentUser: response}));

    // and then redirect the user to the previous URL or home
    history.push(nextRoute ? nextRoute : routes.home);
  } else {
    // otherwise dispatch loginFailure
    yield put(actions.loginFailure());
  }
};

// this is the loginSaga
export const loginUserSaga = function* loginUserSaga(feathersApp) {
  // that is subscribed to USER_LOGIN_REQUEST
  // The tryLogin handler is fired after this, which receives the data from the
  // originally dispatched action
  yield takeLatest(actions.USER_LOGIN_REQUEST, tryLogin, feathersApp);
};

// create handler for our logoutSaga
const requestLogout = function* requestLogout(feathersApp) {
  // we call logout from the user service
  yield call(userService.logout, feathersApp);

  // when it returns we dispatch logout success
  // Do we need to handle a failure? What if the server is down?
  yield put(actions.logoutSuccess());
  // we redirect user to log in form on log out
  yield history.push(routes.login);
};

// this saga subscribes to hte USER_LOGOUT_REQUEST action
export const logoutUserSaga = function* logoutUserSaga(feathersApp) {
  // and it fires its requestLogout handler, passing in our app, and whatever the
  // action was dispatched with, if anything
  yield takeLatest(actions.USER_LOGOUT_REQUEST, requestLogout, feathersApp);
};

// auth request handler, called by
const authUserRequest = function* authUserRequest(feathersApp) {
  // wrap the request in a try block
  try {
    // request authentication
    const response = yield call(userService.authUser, feathersApp);

    // when that's done, dispatch the response to authUserSuccess so we can
    // add the user to state
    yield put(actions.authUserSuccess(response));
  } catch (e) {
    // otherwise indicate the auth failed
    yield put(actions.authUserFail());
  }
};

// watch for USER_AUTH_REQUEST being dispatched
// We can name it so to make it more obvious. Our other watchers should be udpated
// accordingly
export const watchUserAuth = function* authUserSaga(feathersApp) {
  // We use takeLatest, because we only want this dispatched one at a time
  // We specify authUserRequest as the handler for this action being dispatched
  yield takeLatest(actions.USER_AUTH_REQUEST, authUserRequest, feathersApp);
};
