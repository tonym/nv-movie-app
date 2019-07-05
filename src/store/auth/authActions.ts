/**
 * @file authActions
 * @descriptions actions for login and logout
 * @author tm
 */

import { action } from 'typesafe-actions';
import { AuthActionTypes } from './authTypes';

export const login = (user: string) => {
  return  action(AuthActionTypes.LOGIN, user);
}

export const logout = () => {
  return action(AuthActionTypes.LOGOUT);
}
