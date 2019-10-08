/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { parse } from 'qs';
import { apiKey } from '../config';
import Intro from '../components/Intro';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';

const withQuery = (Component) => ({ location: { search } }) => {
  const searchCleaned = search.replace('?', '');
  const query = parse(searchCleaned);
  return (
    <Component {...query} />
  );
};

const SearchPage = ({ vin }) => {
  const history = useHistory();

  const handleSearchAction = (validVin) => {
    console.log('about to change history');
    history.push(`/search?vin=${validVin}`);
  };

  const requestParams = {
    url: `http://marketcheck-prod.apigee.net/v1/vin/${vin}/specs?api_key=${apiKey}`,
    params: {
      method: 'GET',
    },
  };

  return (
    <div className="w-full max-w-lg py-24">
      <Intro />

      <div className="mt-12">
        <SearchForm
          vin={vin}
          handleSearchAction={handleSearchAction}
        />
      </div>

      {vin
        ? <Loader requestParams={requestParams} />
        : null}

    </div>
  );
};

SearchPage.defaultProps = {
  vin: '',
};

SearchPage.propTypes = {
  vin: PropTypes.string,
};

export default withQuery(SearchPage);
