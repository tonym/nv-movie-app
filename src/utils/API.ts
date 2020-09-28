interface SearchOptions {
  page?: string;
  include_adult?: string;
  language?: string;
}

export const get = async <T>(endpoint: string): Promise<T> => {

  const response = await fetch(endpoint);
  const data = await (response.ok ? response.json() : Promise.reject(response.statusText));
  return data;

};

export const getSearchEndpoint = <T>(query: string | '' = '', searchOptions: SearchOptions = {}): string => {

  const defaultSearchOptions: SearchOptions = {
    page: '1',
    include_adult: 'false',
    language: 'en-US'
  };

  const options = { ...defaultSearchOptions, searchOptions };
  const { page, include_adult, language } = options;
  const { REACT_APP_API_URL_SEARCH, REACT_APP_API_KEY_SEARCH } = process.env;
  const encodedQuery = encodeURIComponent(query);

  return `${REACT_APP_API_URL_SEARCH}page=${page}&include_adult=${include_adult}&language=${language}&api_key=${REACT_APP_API_KEY_SEARCH}&query=${encodedQuery}`;
};
