import { combineReducers } from 'redux';
import BoulderReducer from './reducer_boulders';
import ClimberReducer from './reducer_climbers';
import UserReducer from './reducer_user';
import MyBouldersReducer from './reducer_my_boulders';

import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: BoulderReducer,
  climbers: ClimberReducer,
  user: UserReducer,
  form: formReducer,
  boulders: MyBouldersReducer
});

export default rootReducer;
