interface SearchOptions {
  page?: string;
  include_adult?: string;
  language?: string;
}

export const get = <T>(endpoint: string): Promise<T> => {

  return fetch(endpoint).then(response => {
      return response.ok ? response.json() : Promise.reject(response.statusText);
    }).then(data => {
      return data;
    });

};

export const getSearchEndpoint = <T>(query: string | '' = '', searchOptions: SearchOptions = {}): string =>  {

  const defaultSearchOptions: SearchOptions = {
    page: '1',
    include_adult: 'false',
    language: 'en-US'
  }

  const options = { ...defaultSearchOptions, searchOptions}

  let ret = process.env.REACT_APP_API_URL_SEARCH;
  ret += 'page=' + options.page + '&';
  ret += 'include_adult=' + options.include_adult + '&';
  ret += 'language=' + options.language + '&';
  ret += 'api_key=' + process.env.REACT_APP_API_KEY_SEARCH + '&';
  ret += 'query=' + encodeURIComponent(query);

  return ret as string;

}
