/**
 * @file searchActions
 * @descriptions actions for search
 * @author tm
 */

import { action } from 'typesafe-actions';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { SearchActionTypes } from './searchTypes';
import { get, getSearchEndpoint } from '../../utils';

export const getSearchResults = (query: string): ThunkAction<Promise<void>, {}, {}, AnyAction> => {

  const endpoint = getSearchEndpoint(query);

  return  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    await dispatch(action(SearchActionTypes.IS_FETCHING, true));
    await dispatch(action(SearchActionTypes.SET_QUERY, query));
    get(endpoint)
      .then(
        searchResults => {
          dispatch(action(SearchActionTypes.GET_SEARCH_RESULTS, searchResults));
        },
        error => {
          dispatch(action(SearchActionTypes.ERROR, true));
        }
      );
  };
};
