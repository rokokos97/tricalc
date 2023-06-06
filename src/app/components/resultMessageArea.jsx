import React from 'react';
import PropTypes from 'prop-types';
const resultMessageArea = ({result}) => {
  const showPaceResult = (pace) => {
    if (pace[0]==='0') {
      return `Your pace may be ${pace[1]}':${pace[2]}".${pace[3]}`;
    }
    return `Your pace may be ${pace[0]}:${pace[1]}':${pace[2]}"`;
  };
  return (
    <div style={{
      margin: '0 0.5rem',
      background: 'rgba(0, 181, 120, 0.3)',
      borderRadius: '0.4rem',
      textAlign: 'center',
      padding: '1rem',
    }}>
      <div>
        { result.time &&
          `Your time may be ${result.time[0]}:${result.time[1]}':${result.time[2]}"`
        }
      </div>
      <div>
        { result.pace && showPaceResult(result.pace) }
      </div>
      <div>
        { result.tri &&
          `Your time may be ${result.tri[0]}:${result.tri[1]}':${result.tri[2]}"`}
      </div>
      <div>Well Done!</div>
    </div>
  );
};
resultMessageArea.propTypes = {
  result: PropTypes.object,
};
export default resultMessageArea;
