import React from 'react';
import PropTypes from 'prop-types';

const Issue = ({ number }) => (
  <div>{number}</div>
);

Issue.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Issue;
