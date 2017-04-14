import {FETCH_BOULDERS} from '../actions/index';

const INITIAL_STATE = { results: [] };

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
  case FETCH_BOULDERS:
    return { ...state, results: action.payload.data.results };
    // make a new object, add current state, add action.payload.data
  default:
    return state;

  }
}
