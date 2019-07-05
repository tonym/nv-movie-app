/**
 * @file API service
 * @description Service methods for REST APIs
 * @author tm
 */

/**
 * GET from a REST API
 */
export const get = <T>(endpoint: string): Promise<T> => {

  return fetch(endpoint).then(response => {
      return response.ok ? response.json() : Promise.reject(response.statusText);
    }).then(data => {
      return data;
    });

};

/**
 * Create an endpoint for the Ghost API
 */
export const getSearchEndpoint = <T>(query: string | '') =>  {

  let ret = process.env.REACT_APP_API_URL_SEARCH;
  ret += 'page=1&';
  ret += 'include_adult=false&';
  ret += 'language=en-US&';
  ret += 'api_key=' + process.env.REACT_APP_API_KEY_BLOG + '?';
  ret += query ? '&' + query : '';

  return ret;

}
