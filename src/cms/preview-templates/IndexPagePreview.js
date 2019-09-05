import PropTypes from 'prop-types';
import React from 'react';
import { IndexPageTemplate } from '../../templates/index-page';

const IndexPagePreview = ({ entry, getAsset }) => {
  /** @type {number} */
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return <IndexPageTemplate description={data.description} />;
  }

  return <div>Loading...</div>;
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
};

export default IndexPagePreview;
