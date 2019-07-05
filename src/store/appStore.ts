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
  Dispatch,
  Store,
} from 'redux';
import {
  authReducer,
  AuthState
} from './auth';
import thunkMiddleware from 'redux-thunk';

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
};

export const configureStore = (): Store<AppState> => {
  const store = createStore(
    createRootReducer(),
    applyMiddleware(thunkMiddleware),
  )
  return store
}
