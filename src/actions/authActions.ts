/**
 * @file authActions
 * @descriptions actions for login and logout
 * @author tm
 */

import authConstants from '../constants/authConstants';

const login = (user: string) => {
  return { type: authConstants.LOGIN, data: { user: user }};
}

const logout = () => {
  return { type: authConstants.LOGOUT, data: {}};
}