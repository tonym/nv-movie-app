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
  LOGIN = '@@search/getSearchResults',
};

/**
 * Declare state types with `readonly` modifier for compile time immutability.
 */
export interface SearchState {
  readonly searchResults: string;
};
