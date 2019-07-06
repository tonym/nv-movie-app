/**
 * @file searchActions
 * @descriptions actions for search
 * @author tm
 */

import { action } from 'typesafe-actions';
import { SearchActionTypes } from './searchTypes';
import { get, getSearchEndpoint } from '../../utils';

export const getSearchResults = (query: string) => {
  const endpoint = getSearchEndpoint('');
  return  action(SearchActionTypes.GET_SEARCH_RESULTS, '');
}
