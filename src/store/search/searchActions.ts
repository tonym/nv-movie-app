/**
 * @file searchActions
 * @descriptions actions for search
 * @author tm
 */

import { action } from 'typesafe-actions';
import { SearchActionTypes } from './searchTypes';
import { get, getMovieEndpoint } from '../../utils';

export const getSearchResults = (query: string) => {
  const endpoint = getMovieEndpoint('');
  return  action(SearchActionTypes.GET_SEARCH_RESULTS, '');
}
