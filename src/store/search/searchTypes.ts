/**
 * @file searchTypes
 * @description type definitions for search store
 * @author tm
 */

/**
 * Naming conventions don't really matter here, but I chose
 * the @@context patter to stay consistent with internal redux naming
 */
export enum SearchActionTypes {
  ERROR = '@@search/error',
  IS_FETCHING = '@@search/isFetching',
  GET_SEARCH_RESULTS = '@@search/getSearchResults',
};

/**
 * Declare the types and values expected in the API response
 */
interface Results {
  overview: string
  release_date: string;
  title: string;
};

export interface SearchResults {
  page?: number;
  results?: Results[];
  total_pages?: number;
  total_results?: number;
}

/**
 * Declare state types with `readonly` modifier for compile time immutability.
 */
export interface SearchState {
  readonly error: boolean;
  readonly isFetching: boolean;
  readonly searchResults: SearchResults;
};
