/**
 * @file index
 * @description store types and helpers
 * @author tm
 */

import {
  Action,
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  Dispatch
} from 'redux';
import thunkMiddleware from 'redux-thunk';
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
const rootReducer = combineReducers({
 auth: authReducer,
});

/**
 * Helper method to create a store
 */
export const appStore = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);
