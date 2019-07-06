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
  query: '',
  searchResults: {},
};

const searchReducer: Reducer<SearchState> = (state = initialState, action) => {
  switch(action.type) {
    case SearchActionTypes.ERROR:
      return { ...state, error: true, isFetching: false };
    case SearchActionTypes.IS_FETCHING:
      return { ...state, error: false, isFetching: true };
    case SearchActionTypes.GET_SEARCH_RESULTS:
      return { ...state, error: false, isFetching: false, searchResults: action.payload };
    case SearchActionTypes.SET_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

export { searchReducer };
