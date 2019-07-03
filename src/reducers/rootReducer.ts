import { combineReducers } from 'redux';
import { default as auth } from './authReducer';

const rootReducer = combineReducers({
  auth
});

export default rootReducer;