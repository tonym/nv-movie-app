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
import {
  searchReducer,
  SearchState
} from './search';
import thunkMiddleware from 'redux-thunk';

/**
 * Top level state object
 */
export interface AppState {
  auth: AuthState;
  search: SearchState;
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
    search: searchReducer,
  });
};

export const configureStore = (): Store<AppState> => {
  const store = createStore(
    createRootReducer(),
    applyMiddleware(thunkMiddleware),
  )
  return store
}
