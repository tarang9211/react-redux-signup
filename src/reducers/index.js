import { combineReducers } from 'redux';
import SignupReducer from './reducer_data';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  data: SignupReducer,
  form: formReducer
});

export default rootReducer;
