import { applyMiddleware, Store, createStore } from 'redux';
import { AppState, createRootReducer } from './store'
import thunkMiddleware from 'redux-thunk';

export const configureStore = (): Store<AppState> => {
  const store = createStore(
    createRootReducer(),
    applyMiddleware(thunkMiddleware),
  )
  return store
}
