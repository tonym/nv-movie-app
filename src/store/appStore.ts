/**
 * @file index
 * @description store types and helpers
 * @author tm
 */

import {
  Action,
  AnyAction,
  combineReducers,
  Dispatch
} from 'redux';
import {
  authReducer,
  AuthState
} from './auth';

/**
 * Top level state object
 */
export interface AppState {
  auth: AuthState;
};

/**
 * Additional props for components connected with 'connect()'
 */
export interface ConnectedReduxProps<A extends Action = AnyAction> {
 dispatch: Dispatch<A>;
};

/**
 * Application level reducer is a combination of all the reducers
 */
export const createRootReducer = () => {
  return combineReducers({
    auth: authReducer,
  });
}
