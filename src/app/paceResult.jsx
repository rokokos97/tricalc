import React from 'react';
import PropTypes from 'prop-types';

const PaceResult = ({pace}) => {
  if (!pace) {
    return null;
  }

  return (
    <div className="text-center mt-5">
      <h2>{`Темп бігу: ${pace} на км`}</h2>
    </div>
  );
};

PaceResult.propTypes = {
  pace: PropTypes.string,
};
export default PaceResult;
