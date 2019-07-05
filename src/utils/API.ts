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

}
