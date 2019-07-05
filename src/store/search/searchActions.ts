/**
 * @file searchActions
 * @descriptions actions for search
 * @author tm
 */

import { action } from 'typesafe-actions';
import { SearchActionTypes } from './searchTypes';
import { get } from '../../utils';

export const getSearchResults = (searchResults: string) => {
  return  action(SearchActionTypes.GET_SEARCH_RESULTS, searchResults);
}
