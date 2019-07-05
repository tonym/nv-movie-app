/**
 * @file searchReducer
 * @description redux reducer for search
 * @author tm
 */

import { Reducer } from 'redux';
import { SearchActionTypes, SearchState } from './searchTypes';

const initialState: SearchState = {
  searchResults: '',
};

const searchReducer: Reducer<SearchState> = (state = initialState, action) => {
  switch(action.type) {
    case SearchActionTypes.GET_SEARCH_RESULTS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export { searchReducer };
