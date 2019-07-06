/**
 * @file searchReducer
 * @description redux reducer for search
 * @author tm
 */

import { Reducer } from 'redux';
import { SearchActionTypes, SearchState } from './searchTypes';

const initialState: SearchState = {
  error: false,
  isFetching: false,
  searchResults: {},
};

const searchReducer: Reducer<SearchState> = (state = initialState, action) => {
  switch(action.type) {
    case SearchActionTypes.ERROR:
      return { ...state, error: true };
    case SearchActionTypes.IS_FETCHING:
      return { ...state, ...initialState, isFetching: true };
    case SearchActionTypes.GET_SEARCH_RESULTS:
      return { ...state, ...initialState, searchResults: action.payload };
    default:
      return state;
  }
};

export { searchReducer };
