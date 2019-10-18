import { action } from 'typesafe-actions';
import { login, logout } from './authActions';
import { authReducer, initialState } from './authReducer';
import { AuthActionTypes } from './authTypes';

describe('Auth actions', () => {

  it('should create an action to login a user', () => {
    const user = 'Orson Welles'
    const expectedAction = action(AuthActionTypes.LOGIN, user);
    expect(login(user)).toEqual(expectedAction)
  })

  it('should create an action to logout a user', () => {
    const expectedAction = action(AuthActionTypes.LOGOUT);
    expect(logout()).toEqual(expectedAction)
  })

});

describe('Auth reducer', () => {

  const user = 'Orson Welles';
  const loginAction = action(AuthActionTypes.LOGIN, user);
  const logoutAction = action(AuthActionTypes.LOGOUT);

  it('should return the initial state', () => {
    expect(authReducer(undefined, { type: undefined })).toEqual({
      user: '',
    });
  });

  it('should handle LOGIN', () => {
    expect(authReducer(initialState, loginAction)).toEqual({
      user: user,
    });
  });

  it('should handle LOGOUT', () => {
    expect(authReducer({ user: user }, logoutAction)).toEqual({
      user: '',
    });
  });

});
