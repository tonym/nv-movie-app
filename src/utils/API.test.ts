import React from 'react';
import { getSearchEndpoint } from './API';

it('returns an endpoint as a string', () => {
  const query = 'testQuery';
  const endpoint = getSearchEndpoint(query);
  expect(endpoint).toEqual(expect.stringContaining(query));
});
