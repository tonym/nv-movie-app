import { action } from 'typesafe-actions';
import { LOGIN, LOGOUT } from './authTypes';

export const login = (user: string) => {
  return  action(LOGIN, user);
}

export const logout = () => {
  return action(LOGOUT);
}
