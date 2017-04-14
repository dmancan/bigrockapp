import {AUTH_USER, CHECK_USER, FAIL_USER, LOGOUT_USER} from '../actions/index';

const INITIAL_STATE = { results: null, authenticated:false };

export default function (state = INITIAL_STATE, action){
  switch (action.type) {

  case AUTH_USER:
    console.log('Authenticated:', state.authenticated);
    return state;

  case CHECK_USER:
    console.log('updated user info');
    return { ...state, results: action.payload.data, authenticated: true };
    // make a new object, add current state, add action.payload.data

  case FAIL_USER:
      console.log('user is failure');
      return state;
      //return { ...state, results: action.payload.data.results };
      // make a new object, add current state, add action.payload.data
  case LOGOUT_USER:
      console.log('user has logged out');
      return { ...state, results: null, authenticated: false };

  default:
    return state;

  }
}
