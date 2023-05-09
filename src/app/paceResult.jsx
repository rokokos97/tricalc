import React from 'react';
import PropTypes from 'prop-types';

const PaceResult = ({distance, timeInMs, showMs}) => {
  const paceInMs = timeInMs / distance;
  const pace = new Date(paceInMs).toISOString().substr(14, showMs ? 10 : 5);

  return (
    <div className="mt-4">
      <h4>Темп бігу:</h4>
      <p>{pace} на км</p>
    </div>
  );
};
PaceResult.propTypes = {
  distance: PropTypes.number,
  timeInMs: PropTypes.number,
  showMs: PropTypes.string,
};
export default PaceResult;
