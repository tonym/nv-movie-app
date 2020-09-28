import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { action } from 'typesafe-actions';
import { getSearchResults } from './searchActions';
import { searchReducer } from './searchReducer';
import { SearchActionTypes } from './searchTypes';
import { getSearchEndpoint } from '../../utils';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockState = {
  error: false,
  isFetching: false,
  query: 'false',
  searchResults: {},
};
const query = ' ';
const body = {
  page: 1,
  results: [],
  total_pages: 1,
  total_results: 0,
};
const headers = { 'content-type': 'application/json' };
const endpoint = getSearchEndpoint(query);
const initialState = {
  error: false,
  isFetching: false,
  query: '',
  searchResults: {},
};

describe('Search async actions', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  it('should create a success action when fetching is done', () => {

    fetchMock.getOnce(endpoint, { body: body, headers: headers });

    const expectedActions = [
      action(SearchActionTypes.IS_FETCHING, true),
      action(SearchActionTypes.SET_QUERY, query),
      action(SearchActionTypes.GET_SEARCH_RESULTS, body)
    ];

    const store = mockStore(mockState);
    type MockThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;
    const thunkDispatch = store.dispatch as MockThunkDispatch;

    thunkDispatch(getSearchResults(query)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });

  });

});

describe('Search reducer', () => {

  it('should return the initial state', () => {
    expect(searchReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should return an error, with state.error = true', () => {
    const expectedState = { ...initialState, error: true };
    const errorAction = action(SearchActionTypes.ERROR, {});
    expect(searchReducer(initialState, errorAction)).toEqual(expectedState);
  });

  it('should return a fetching state so the loading animation can show', () => {
    const expectedState = { ...initialState, isFetching: true };
    const isFetchingAction = action(SearchActionTypes.IS_FETCHING, {});
    expect(searchReducer(initialState, isFetchingAction)).toEqual(expectedState);
  });

  it('should return state with query saved', () => {
    const expectedState = { ...initialState, query: query };
    const queryAction = action(SearchActionTypes.SET_QUERY, query);
    expect(searchReducer(initialState, queryAction)).toEqual(expectedState);
  });

  it('should return state with API response', () => {
    const expectedState = { ...initialState, searchResults: body };
    const getSearchResultsAction = action(SearchActionTypes.GET_SEARCH_RESULTS, body);
    expect(searchReducer(initialState, getSearchResultsAction)).toEqual(expectedState);
  });

  it('should return unmutated state on invalid action', () => {
    const invalidAction = action('somethingThatWontWork', {});
    expect(searchReducer(initialState, invalidAction)).toEqual(initialState);
  });

});
