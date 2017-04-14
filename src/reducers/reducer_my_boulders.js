import {UPDATE_USER_BOULDERS, FETCH_MY_BOULDERS, LOG_OUT_MY_BOULDERS} from '../actions/index';

const INITIAL_STATE = { myBoulders: null };

export default function (state = INITIAL_STATE, action){

  switch (action.type) {

  case FETCH_MY_BOULDERS:
    console.log('action.payload.data.results:',action.payload.data.results);
  return { ...state, myBoulders: action.payload.data.results };

  case UPDATE_USER_BOULDERS:
      console.log('updated user boulders', action.payload);
      //return { ...state, results: null, authenticated: false };
        return state;

  case LOG_OUT_MY_BOULDERS:
        return { ...state, myBoulders: null };

  default:
    return state;

  }
}
