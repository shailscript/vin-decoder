import React from 'react';
import { parse } from 'qs';

const withQuery = (Component) => ({ location: { search } }) => {
  const searchCleaned = search.replace('?', '');
  const query = parse(searchCleaned);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...query} />
  );
};

export default withQuery;
