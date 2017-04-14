import {FETCH_CLIMBERS} from '../actions/index';

const INITIAL_STATE = { results: [] };

export default function (state = INITIAL_STATE, action){
  switch (action.type) {
  case FETCH_CLIMBERS:
    return { ...state, results: action.payload.data.results };
    // make a new object, add current state, add action.payload.data
  default:
    return state;

  }
}
