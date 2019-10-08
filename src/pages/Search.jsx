import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import { apiKey } from '../config';
import withQuery from '../hocs/withQuery';
import Intro from '../components/Intro';
import Loader from '../components/Loader';
import SearchForm from '../components/SearchForm';
import VehicleCard from '../components/VehicleCard';
import Error from '../components/Error';

const SearchPage = ({ vin }) => {
  const history = useHistory();

  const handleSearchAction = (validVin) => {
    history.push(`/search?vin=${validVin}`);
  };

  const url = `http://marketcheck-prod.apigee.net/v1/vin/${vin}/specs?api_key=${apiKey}`;

  const rLoader = (
    <Loader
      url={url}
      // eslint-disable-next-line react/jsx-props-no-spreading
      onSuccess={(vehicle) => <VehicleCard {...vehicle} />}
      onError={(error) => <Error message={error} />}
    />
  );
  const rNoLoader = null;

  const rSearchForm = (
    <SearchForm
      vin={vin}
      onSubmit={handleSearchAction}
    />
  );

  return (
    <div className="w-full max-w-lg py-24">
      <Intro />

      <div className="mt-12">
        {rSearchForm}
      </div>

      {vin ? rLoader : rNoLoader}
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
