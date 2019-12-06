import { Reducer } from 'redux';
import { LOGIN, LOGOUT, AuthState } from './authTypes';

const initialState: AuthState = {
  user: '',
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: '' };
    default:
      return state;
  }
};

export { authReducer, initialState };
