/**
 * @file authReducer
 * @description redux reducer for login
 * @author tm
 */

import { Reducer } from 'redux';
import { AuthActionTypes, AuthState } from './authTypes';

const initialState: AuthState = {
  user: '',
};

const authReducer: Reducer<AuthState> = (state = initialState, action) => {
  switch(action.type) {
    case AuthActionTypes.LOGIN:
      return { ...state, user: action.payload };
    case AuthActionTypes.LOGOUT:
      return { ...state, user: '' };
    default:
      return state;
  }
};

export { authReducer };
